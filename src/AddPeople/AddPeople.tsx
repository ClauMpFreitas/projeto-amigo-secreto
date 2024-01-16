import { Card, Col, Form, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";

export function AddPeople(){
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
                >
                </Form>
                </Card>
            </Col>
        </Row>
        </>
    )
}