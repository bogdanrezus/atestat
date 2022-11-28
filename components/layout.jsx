import Head from "next/head";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="mx-auto max-w-5xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
