import React from "react";
import Link from "next/link";
import {
  Anchor,
  grommet,
  Grommet,
  Page,
  PageContent,
  PageHeader,
} from "grommet";
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
        {/* Need to pass href:
         * https://github.com/zeit/next.js/#forcing-the-link-to-expose-href-to-its-child */}
        <Link href="/" passHref>
          <Anchor
            alignSelf="start"
            label="Back to Home page"
            icon={<FormNext />}
            reverse
          />
        </Link>
      </PageContent>
    </Page>
  </Grommet>
);

export default SecondPage;
