import { Button, Card, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import TextArea from "antd/es/input/TextArea";
import moment, { Moment } from "moment";
import { Rule } from "antd/es/form";

export function HomePage() {
    const validateDate = (_rule: Rule, value: Moment | string | null | undefined): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (!value) {
                // Se o valor for nulo ou indefinido, considera válido (ou você pode tratar de outra forma)
                resolve();
                return;
            }
    
            const currentDate = moment();
            const selectedDate = moment(value);
    
            if (selectedDate.isBefore(currentDate, 'day') || selectedDate.isSame(currentDate, 'day')) {
                reject('Por favor, insira uma data futura válida.'); // A data está no passado ou é igual à data atual
            } else {
                resolve(); // A data é no futuro
            }
        });
    };

    const onFinish = (values: unknown) => {
        console.log('Success:', values);
    };
      
    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        nomeevento?: string;
        descricao?: string;
        datasorteio?: Moment;
        dataencontro?: Moment;
    };

    return (
        <>
        <Row gutter={24}>
            <Col span={12}>
            <Typography.Title level={2}>Amigo Almoço</Typography.Title>
            <Typography.Text>Bem vindo ao nosso app pra gerenciar amigo almoço</Typography.Text>
                <GiftAndPersonsSvg/>
            </Col>
            <Col span={12}>
                <Card style={{ width: 400, height: 380 }}>
                <Form
                name="eventForm"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item<FieldType>
                    name="nomeevento"
                    label="Nome do evento"
                    rules={[{ required: true, message: 'Insira o nome do evento.' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="descricao"
                    label="Descrição do evento"
                    rules={[{ required: true, message: 'Insira a descrição do evento.' }]}
                    >
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item<FieldType>
                    name="datasorteio"
                    label="Data do sorteio"
                    rules={[
                        { required: true, message: 'Insira uma data válida.' },
                        { validator: validateDate },
                    ]}
                    >
                    <DatePicker/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="dataencontro"
                    label="Data do encontro"
                    rules={[
                        { required: true, message: 'Insira uma data válida.' },
                        { validator: validateDate },
                    ]}
                    >
                    <DatePicker/>
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit">Enviar dados</Button>
                </Form.Item>
                </Form>
                </Card>
            </Col>
        </Row>
        </>
    )
}