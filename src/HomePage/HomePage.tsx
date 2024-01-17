import { Button, Card, Col, DatePicker, Form, Input, Row, Typography, notification } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import TextArea from "antd/es/input/TextArea";
import moment, { Moment } from "moment";

export type CustomValidationError = {
    message: string;
};

type FieldType = {
    nomeevento?: string;
    descricao?: string;
    datasorteio?: Moment | undefined;
    dataencontro?: Moment | undefined;
};

const NOTIFICATION_MESSAGES = {
    INFO_FILL_DATES: 'Por favor, preencha a data.',
    INFO_DATE_BEFORE_CURRENT: 'A data não pode ser anterior ao dia corrente.',
    ERROR_DATE_BEFORE_OR_SAME: 'A data de encontro não pode ser igual ou anterior à data de sorteio.',
    SUCCESS_SUBMIT: 'Dados enviados com sucesso!',
};

const showInfoNotification = (message: string, description: string) => {
    notification.info({ message, description });
};

const showErrorNotification = (message: string, description: string) => {
    notification.error({ message, description });
};

const validateDate = (dateEncontro: Moment | undefined, dateSorteio: Moment | undefined) => {
    const currentDate = moment();
  
    if (!dateEncontro || !dateSorteio) {
        showInfoNotification('Info', NOTIFICATION_MESSAGES.INFO_FILL_DATES);
        throw new Error(NOTIFICATION_MESSAGES.INFO_FILL_DATES);
    }
  
    if (dateEncontro.isBefore(currentDate, 'day') || dateSorteio.isBefore(currentDate, 'day')) {
        showInfoNotification('Info', NOTIFICATION_MESSAGES.INFO_DATE_BEFORE_CURRENT);
        throw new Error(NOTIFICATION_MESSAGES.INFO_DATE_BEFORE_CURRENT);
    }

    if (dateEncontro.isBefore(dateSorteio, 'day') || dateEncontro.isSame(dateSorteio, 'day')) {
        showErrorNotification('Erro', NOTIFICATION_MESSAGES.ERROR_DATE_BEFORE_OR_SAME);
        throw new Error(NOTIFICATION_MESSAGES.ERROR_DATE_BEFORE_OR_SAME)
    }
  };

export function HomePage() {
    const onFinish = (values: { dataencontro: Moment, datasorteio: Moment }) => {
        try {
            validateDate(values.dataencontro, values.datasorteio);
            showInfoNotification('Sucesso', NOTIFICATION_MESSAGES.SUCCESS_SUBMIT);
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
                <Form.Item<FieldType>
                    name="datasorteio"
                    label="Data do sorteio"
                    rules={[
                        { required: true, message: NOTIFICATION_MESSAGES.INFO_FILL_DATES}
                    ]}
                    >
                    <DatePicker/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="dataencontro"
                    label="Data do encontro"
                    rules={[
                        { required: true, message: NOTIFICATION_MESSAGES.INFO_FILL_DATES}
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