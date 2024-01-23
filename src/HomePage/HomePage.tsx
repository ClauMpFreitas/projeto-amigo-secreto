import { Button, Card, Col, DatePicker, Form, Input, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import TextArea from "antd/es/input/TextArea";
import moment, { Moment } from "moment";
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

export type CustomValidationError = {
    message: string;
};

type FieldType = {
    nomeevento?: string;
    descricao?: string;
    datasorteio?: Moment | undefined;
    dataencontro?: Moment | undefined;
};

const validateDate = (dateEncontro: Moment | undefined, dateSorteio: Moment | undefined) => {
    const currentDate = moment();
  
    if (!dateEncontro || !dateSorteio) {
        alert('Por favor, preencha a data.');
        throw new Error('Por favor, preencha a data.');
    }
  
    if (dateEncontro.isBefore(currentDate, 'day') || dateSorteio.isBefore(currentDate, 'day')) {
        alert('A data não pode ser anterior ao dia corrente.');
        throw new Error('A data não pode ser anterior ao dia corrente.');
    }

    if (dateEncontro.isBefore(dateSorteio, 'day') || dateEncontro.isSame(dateSorteio, 'day')) {
        alert('A data de encontro não pode ser igual ou anterior à data de sorteio.');
        throw new Error('A data de encontro não pode ser igual ou anterior à data de sorteio.');
    }
};

export function HomePage() {
    const navigate = useNavigate();
    const { setEventInfo } = useAppContext();

    const onFinish = (values: { dataencontro: Moment, datasorteio: Moment }) => {
        setEventInfo(values);
        try {
            validateDate(values.dataencontro, values.datasorteio);
            alert('Dados enviados com sucesso!');
            navigate('/addpeople');
        } catch (error) {
            console.error(isCustomValidationError(error) ? error.message : 'Ocorreu um erro desconhecido.');
        }
    };

    const isCustomValidationError = (error: unknown): error is CustomValidationError => {
        return (error as CustomValidationError)?.message !== undefined;
    };

    return (
        <>
        <Row gutter={24}>
        <Col span={12}>
            <div style={{ marginLeft: '20px' }}>
                <Typography.Title level={1}>Amigo Almoço</Typography.Title>
                <Typography.Text>Bem-vindo ao nosso aplicativo para gerenciar amigo almoço</Typography.Text>
                <GiftAndPersonsSvg/>
            </div>
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
                <Form.Item name="datasorteio" label="Data do sorteio" rules={[{ required: true, message: 'Por favor, preencha a data.' }]}>
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="dataencontro" label="Data do encontro" rules={[{ required: true, message: 'Por favor, preencha a data.' }]}>
                                <DatePicker />
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