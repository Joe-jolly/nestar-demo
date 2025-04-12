import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT - PAGES ROUTER");
  return (
    <Html lang="en">
      <Head>
      <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        {/* SEO  - Search engine optimization */}
        <meta
          name="keyword"
          content={"nestar, nestar.uz, devex mern, mern nestjs fullstack"}
        />
        <meta
          name="desctiption"
          content={
            "Buy and sell properties anywhere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в любой точке Южной Кореи в любое время." +
            "대한민국 어디서든, 언제든지 쉽고 빠르게 부동산 거래하세요!"
          }
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
