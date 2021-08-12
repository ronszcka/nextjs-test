import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps};
  }

  render() {
    return(
      <Html lang="pt-BR" translate="no" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta name="google" content="notranslate" />
          <meta http-equiv="content-language" content="pt-BR" />
          <meta property="og:locale" content="pt_BR" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}

export default MyDocument;