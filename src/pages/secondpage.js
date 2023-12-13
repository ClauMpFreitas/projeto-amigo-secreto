import React from "react";
import Link from "next/link";
import { grommet, Grommet, Page, PageContent, PageHeader } from "grommet";
import { FormNext } from "grommet-icons";

const SecondPage = () => (
  <Grommet theme={grommet} full>
    <Page>
      <PageContent>
        <PageHeader
          title="Second Page"
          description={`Next.js automatically handles the route based 
          on your file structure.`}
        />
        <Link href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FormNext />
            <span style={{ marginLeft: "8px" }}>Back to Home page</span>
          </a>
        </Link>
      </PageContent>
    </Page>
  </Grommet>
);

export default SecondPage;
