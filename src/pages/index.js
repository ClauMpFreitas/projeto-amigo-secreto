import React from "react";
import Link from "next/link";
import {
  Anchor,
  grommet,
  Grommet,
  Page,
  PageContent,
  PageHeader,
  Paragraph,
} from "grommet";
import { FormNext } from "grommet-icons";

const customTheme = deepMerge(grommet, {
  defaultMode: "customTheme",
  global: {
    colors: {
      "background-back": {
        dark: "#000080",
        light: "#EFEFEF",
      },
      "background-front": {
        dark: "#222938",
        light: "#FFFFFF",
      },
      "background-contrast": {
        dark: "#FFFFFF08",
        light: "#11111108",
      },
      "background-custom": {
        dark: "#0E5265",
        light: "#00C8FF",
      },
    },
  },
});

const Index = () => (
  <Grommet theme={customTheme} full>
    <Page>
      <PageContent>
        <PageHeader title="Bem vindo ao nosso site!!" />
        <Paragraph>
          Para se cadastrar{" "}
          <Anchor
            href="https://v2.grommet.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique aqui
          </Anchor>
          .
        </Paragraph>
        <Paragraph>
          Para dúvidas ou sugestões{" "}
          <Anchor
            href="https://nextjs.org/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Entre em contato conosco
          </Anchor>
          .
        </Paragraph>
        <Link href="/secondpage" passHref>
          <Anchor
            alignSelf="start"
            label="Second page"
            icon={<FormNext />}
            reverse
          />
        </Link>
      </PageContent>
    </Page>
  </Grommet>
);

export default Index;
