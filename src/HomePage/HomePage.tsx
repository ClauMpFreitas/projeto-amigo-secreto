import { Button, Card, Col, DatePicker, Form, Input, Row, Typography, notification } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import TextArea from "antd/es/input/TextArea";
import moment from 'moment';

export function HomePage() {
    const onFinish = ({ eventName, eventDescription, drawDate, meetingDate }: { 
        eventName: 'nome';
        eventDescription: 'descricao';
        drawDate: moment.MomentInput;
        meetingDate: moment.MomentInput;
      }) => {
        console.log(eventName, eventDescription, drawDate, meetingDate)
        const requiredFields = ['eventName', 'eventDescription', 'drawDate', 'meetingDate'];
      
        const missingFields = requiredFields.filter(field => !eval(field));
      
        if (missingFields.length > 0 && missingFields.length < 4) {
            console.log('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        const drawDateMoment = moment(drawDate);
        const meetingDateMoment = moment(meetingDate);
        const currentDate = moment();
      
        if (!meetingDateMoment.isValid() || !drawDateMoment.isValid()) {
          console.log('Por favor, insira datas válidas.');
          return;
        }
      
        if (drawDateMoment.isBefore(currentDate) || meetingDateMoment.isBefore(currentDate)) {
          console.log('A data do sorteio ou do encontro não podem ser menores que o dia corrente');
          return;
        }
      
        if (meetingDateMoment.isSameOrBefore(drawDateMoment)) {
          console.log('A data do encontro deve ser posterior à data do sorteio.');
          return;
        }
      
        console.log('Success:', { eventName, eventDescription, drawDate, meetingDate });
      };
      
      const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
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