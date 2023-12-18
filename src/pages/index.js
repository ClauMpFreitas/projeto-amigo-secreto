import React from "react";
import Link from "next/link";
import {
  grommet,
  Grommet,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
} from "grommet";

const Index = () => (
  <Grommet theme={grommet} full>
    <Page>
      <PageContent>
        <PageHeader title="Bem vindo ao nosso site!!" />
        <Paragraph style={{ textAlign: "justify" }}>
          Bem-vindo ao Amigo Almoço Online, o lugar perfeito para criar e
          compartilhar momentos especiais com seus amigos! Nosso site oferece
          uma experiência única, onde os usuários podem se cadastrar para
          participar de eventos gastronômicos surpresa organizados entre amigos.
          Venha participar também!!
        </Paragraph>
        <Paragraph>
          Para se cadastrar <Link href="/paginadadospessoais">Clique aqui</Link>
        </Paragraph>
      </PageContent>
    </Page>
  </Grommet>
);

export default Index;
