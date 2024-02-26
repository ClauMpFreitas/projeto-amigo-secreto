import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";

type FieldType = {
    login?: string
    senhaacesso?: string
};

export function PageLogin(){
    const onFinish = (values: FieldType) => {
        console.log('Login realizado', values);
        // Adicione aqui lógica de chamada à API quando estiver pronta
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
              <Card style={{ width: 400, height: 450 }}>
                <div style={{ marginBottom: '25px' }}>
                  <Typography.Title level={2} style={{ marginTop: '3px' }}>Login</Typography.Title>
                </div>
                <Form
                name="eventForm"
                onFinish={onFinish}
                >
                <Form.Item<FieldType>
                    name="login"
                    label="Login"
                    rules={[
                        { required: true, message: 'Insira seu e-mail.' },
                        { type: 'email', message: 'E-mail inválido.' },
                      ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="senhaacesso"
                    label="Senha"
                    rules={[
                        { required: true, message: 'Insira sua senha.' },
                        { whitespace: true, message: 'A senha não pode conter espaços.' },
                        { min: 4, message: 'A senha deve ter pelo menos 4 caracteres.' },
                      ]}
                >
                    <Input.Password />
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
                    Entrar
                </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </>
      );
}