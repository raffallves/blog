import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css" />
        <meta httpEquiv="Content-Type" content="text/html" charSet='utf-8'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}