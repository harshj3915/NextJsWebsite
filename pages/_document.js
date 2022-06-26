import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                debug: true
              };
            `,
          }}
        />

        <link rel="icon" type="image/png" href="/img/sglogofav.png"></link>

        <meta name="author" content="VinnovateIT" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="The guide for your CATs and FATs - StudyHub"
        />
        <meta name="theme-color" content="#17a2b8" />
        {/* <!-- FOR FACEBOOK --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="StudyHub - The guide for your CATs and FATs."
        />
        <meta
          property="og:description"
          content="The best resources and materials to help ace college and university examinations and  challenges."
        />
        <meta
          property="og:image"
          content="https://studyhub.vinnovateit.com/img/sglogofav.png"
        />
        <meta property="og:url" content="https://studyhub.vinnovateit.com/" />
        <meta property="og:site_name" content="StudyHub" />

        {/* <!-- FOR FACEBOOK END --> */}
        {/* <!-- FOR TWITTER --> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="StudyHub" />
        <meta
          name="twitter:title"
          content="StudyHub - The guide for your CATs and FATs."
        />
        <meta
          name="twitter:description"
          content="The best resources and materials to help ace college and university examinations and  challenges."
        />
        <meta name="twitter:creator" content="@Sriesh_Agrawal" />
        <meta
          name="twitter:image"
          content="https://studyhub.vinnovateit.com/img/sglogofav.png"
        />

        <meta itemProp="name" content="StudyHub" />
        <meta
          itemProp="description"
          content="The best resources and materials to help ace college and university examinations and  challenges."
        />
        <meta itemProp="image" content="#" />
        {/* <!-- FOR TWITTER END  --> */}

        <Script
          src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>
      </Head>

      <body>
        <Main />
        <NextScript />
        <Script
          src="https://code.jquery.com/jquery-3.5.1.js"
          integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
          crossorigin="anonymous"
        />

        <Script
          src="https://kit.fontawesome.com/695fbc93f3.js"
          crossorigin="anonymous"
        ></Script>
      </body>
    </Html>
  );
}
