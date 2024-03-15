import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import Link from "next/link";

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
