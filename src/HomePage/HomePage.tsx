import { Card, Col, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";


export function HomePage() {
    return (
        <>
        <Row gutter={24}>
            <Col span={12}>
            <Typography.Title level={2}>Amigo Almoço</Typography.Title>
            <Typography.Text>Bem vindo ao nosso app pra gerenciar amigo almoço</Typography.Text>
                <GiftAndPersonsSvg/>
            </Col>
            <Col span={12}>
                <Card style={{ width: 300 }}>
                    Coloque aqui o form
                </Card>
            </Col>
        </Row>
        </>
    )
}
