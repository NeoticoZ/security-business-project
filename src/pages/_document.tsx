import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display%3A100%2C300%2Cregular%2C500%2C600%2C700%2C800%2C900%7CJost%3A100%2C200%2C300%2Cregular%2C500%2C600%2C700%2C800%2C900%2C100italic%2C200italic%2C300italic%2Citalic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic%7CLobster%3Aregular%7CPlayfair+Display%3Aregular%2C500%2C600%2C700%2C800%2C900%2Citalic%2C500italic%2C600italic%2C700italic%2C800italic%2C900italic&subset=latin%2Clatin-ext%2Cvietnamese%2Ccyrillic%2Ccyrillic-ext&ver=5.9.1"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
