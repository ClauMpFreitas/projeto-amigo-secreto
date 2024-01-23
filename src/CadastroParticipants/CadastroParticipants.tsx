import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import { RuleObject } from "antd/es/form";

type FieldType = {
    nomeparticipante?: string
    email?: string
    senhaacesso?: string
    telefone?: string
};

export function CadastroParticipants(){
    const onFinish = (values: FieldType) => {
        console.log('Formulário submetido:', values);
        // Adicione aqui lógica de chamada à API quando estiver pronta
    };

    const validateTelefone = (_: RuleObject, value: string, callback: (error?: string) => void) => {
        const digitsOnly = value.replace(/\D/g, '');
        const validLength = digitsOnly.length === 11;
      
        if (!value) {
          callback();
        } else if (validLength) {
          callback();
        } else {
          callback('Número de telefone inválido. Deve conter 11 dígitos.');
        }
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
                <div style={{ marginBottom: '5px' }}>
                  <Typography.Title level={2} style={{ marginTop: '3px' }}>Cadastro do participante</Typography.Title>
                </div>
                <Form
                name="eventForm"
                onFinish={onFinish}
                >
                <Form.Item<FieldType>
                    name="nomeparticipante"
                    label="Nome ou apelido"
                    rules={[{ required: true, message: 'Insira seu nome.' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="email"
                    label="E-mail"
                    rules={[
                        { required: true, message: 'Insira seu e-mail.' },
                        { type: 'email', message: 'E-mail inválido.' },
                      ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    name="senhaacesso"
                    label="Senha de acesso"
                    rules={[
                        { required: true, message: 'Insira sua senha.' },
                        { whitespace: true, message: 'A senha não pode conter espaços.' },
                        { min: 4, message: 'A senha deve ter pelo menos 4 caracteres.' },
                      ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item<FieldType>
                    name="telefone"
                    label="Telefone"
                    rules={[
                        { required: true, message: 'Insira seu telefone.' },
                        { validator: validateTelefone },
                      ]}
                >
                    <Input/>
                </Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
                    Cadastrar
                </Button>
                </Form>
                <div style={{ marginTop: '8px' }}>
                    <Typography.Text>
                        Se você já é cadastrado,{' '}
                        <a href="/pagelogin">clique aqui</a>.
                    </Typography.Text>
                </div>
              </Card>
            </Col>
          </Row>
        </>
      );
}