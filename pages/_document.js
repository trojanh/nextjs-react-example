import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=yes"
          />
          {this.props.styleTags}
          <noscript>
            <h5 className="no-script">
              It looks like your browser has JavaScript disabled.
            </h5>
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
