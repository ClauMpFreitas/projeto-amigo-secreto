import { Button, Card, Col, Row, Typography } from "antd";
import { GiftAndPersonsSvg } from "../assets/Svgs/GiftAndPersonsSvg";
import { useAppContext } from '../AppContext';
import { useState } from "react";

export function WatchEvent() {
  const { eventInfo, participants } = useAppContext();
  const [generatedLink, setGeneratedLink] = useState<string | null>(null);

  const generateEventLink = () => {
    const eventLink = `https://amigoalmoco.com/${eventInfo.nomeevento}`;
    return eventLink;
  };

  const handleGenerateLink = () => {
    const link = generateEventLink();
    setGeneratedLink(link);
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
          <Card style={{ width: 400, height: 400 }}>
            <div style={{ marginBottom: '5px' }}>
              <Typography.Title level={2} style={{ marginTop: '3px' }}>Detalhes do Evento</Typography.Title>
              <Typography.Text strong>Nome do Evento: </Typography.Text>
              <Typography.Text>{eventInfo.nomeevento}</Typography.Text>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <Typography.Text strong>Descrição: </Typography.Text>
              <Typography.Text>{eventInfo.descricao}</Typography.Text>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <Typography.Text strong>Data do Sorteio: </Typography.Text>
              <Typography.Text>{eventInfo.datasorteio?.format('DD/MM/YYYY')}</Typography.Text>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <Typography.Text strong>Data do Encontro: </Typography.Text>
              <Typography.Text>{eventInfo.dataencontro?.format('DD/MM/YYYY')}</Typography.Text>
            </div>
            <Typography.Title level={3}>Lista de Participantes</Typography.Title>
            <Row gutter={16}>
              {participants.map((participant, index) => (
                <Col span={6} key={index}>
                  <Typography.Text>{participant}</Typography.Text>
                </Col>
              ))}
            </Row>
            <Button type="primary" onClick={handleGenerateLink} style={{ marginTop: '20px' }}>
                Gerar Link para o Evento
            </Button>
            <div style={{ marginTop: '8px' }}>
                <Typography.Text strong>Link Gerado: </Typography.Text>
                {generatedLink ? (
                <a href={generatedLink} target="_blank" rel="noopener noreferrer">
                    {generatedLink}
                </a>
                ) : (
                <Typography.Text>Nenhum link gerado ainda</Typography.Text>
                )}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}