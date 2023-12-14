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
        <Paragraph>
          Para fazer login{" "}
          <Link href="/paginalogin">
            <a>Clique aqui</a>
          </Link>
        </Paragraph>
        <Paragraph>
          Para se cadastrar{" "}
          <Link href="/paginadadospessoais">
            <a>Clique aqui</a>
          </Link>
        </Paragraph>
        <Paragraph>
          Para entrar em contato{" "}
          <Link href="/secondpage" passHref>
            <a>Clique aqui</a>
          </Link>
        </Paragraph>
      </PageContent>
    </Page>
  </Grommet>
);

export default Index;
