import { useState } from "react";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";

export function AddPeople() {
    const [participants, setParticipants] = useState<string[]>([]);

    const onFinish = (values: { addpeople: string }) => {
      setParticipants([...participants, values.addpeople]);
    };
  
    const onSendParticipants = () => {
      console.log(participants);
    };
  
    const onNextPage = () => {
      console.log("Navegar para a próxima página");
    };

    return (
        <>
          <Row gutter={24}>
            <Col span={12}>
              <Typography.Title level={2}>Amigo Almoço</Typography.Title>
              <Typography.Text>
                Bem vindo ao nosso app para gerenciar amigo almoço
              </Typography.Text>
              <GiftAndPersonsSvg />
            </Col>
            <Col span={12}>
              <Card style={{ width: 400, height: 380 }}>
                <Form name="eventForm" onFinish={onFinish}>
                  <Form.Item
                    name="addpeople"
                    label="Adicione os participantes"
                    rules={[
                      { required: true, message: "Insira o nome do participante." },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={onSendParticipants}>
                      Adicionar
                    </Button>
                  </Form.Item>
                </Form>
                <Typography.Title level={3}>Lista de Participantes</Typography.Title>
                <Row gutter={16}>
                    {participants.map((participant, index) => (
                    <Col span={6} key={index}>
                        <Typography.Text>{participant}</Typography.Text>
                        </Col>
                    ))}
                </Row>
                <Button type="primary" onClick={onNextPage} style={{ margin: '20px' }}>
                  Continuar
                </Button>
              </Card>
            </Col>
          </Row>
        </>
      );
    }