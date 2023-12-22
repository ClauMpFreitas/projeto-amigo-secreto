import { Button, Card, Col, DatePicker, Form, Input, Row, Typography, notification } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import TextArea from "antd/es/input/TextArea";
import moment, { Moment } from "moment";
import { Rule } from "antd/es/form";

export function HomePage() {
    const validateDate = async (_rule: Rule, values: { dataencontro: Moment | null | undefined, datasorteio: Moment | null | undefined }): Promise<void> => {
        return new Promise((resolve, reject) => {
            if (!values || (!values.dataencontro && !values.datasorteio)) {
                resolve();
                return;
            }
    
            const currentDate = moment();
            const dateEncontro = values.dataencontro;
            const dateSorteio = values.datasorteio;
    
            if (dateEncontro && dateSorteio) {
                if (dateEncontro.isBefore(currentDate, 'day') || dateSorteio.isBefore(currentDate, 'day')) {
                    notification.info({
                        message: 'Info',
                        description: 'A data não pode ser anterior ao dia corrente.'
                    });
                } else {
                    resolve();
                }
            } else {
                notification.info({
                    message: 'Info',
                    description: 'Por favor, preencha ambas as datas.'
                });
                reject('Por favor, preencha ambas as datas.');
            }
        });
    };

    const onFinish = (values: { dataencontro: Moment, datasorteio: Moment }) => {
        validateDate({}, values)
            .then(() => {
                const dateEncontro = values.dataencontro;
                const dateSorteio = values.datasorteio;
    
                if (dateEncontro.isBefore(dateSorteio, 'day') || dateEncontro.isSame(dateSorteio, 'day')) {
                    notification.error({
                        message: 'Erro',
                        description: 'A data de encontro não pode ser igual ou anterior à data de sorteio.'
                    });
                    return;
                }
    
                notification.success({
                    message: 'Sucesso',
                    description: 'Dados enviados com sucesso!'
                });
            })
    };

    type FieldType = {
        nomeevento?: string;
        descricao?: string;
        datasorteio?: Moment | undefined;
        dataencontro?: Moment | undefined;
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
                        { required: true, message: 'Insira a data.' },
                        { validator: validateDate },
                    ]}
                    >
                    <DatePicker/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="dataencontro"
                    label="Data do encontro"
                    rules={[
                        { required: true, message: 'Insira a data.' },
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