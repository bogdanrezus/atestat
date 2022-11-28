import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark:[color-scheme:dark]">
      <Head />
      <body className="bg-gray-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
