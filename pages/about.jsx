import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-5">
      <Head>
        <title>Despre noi</title>
      </Head>
      <section>
        <h1 className="my-16 text-5xl dark:text-almostWhite">Despre noi</h1>
        <p className="max-w-3xl py-2 text-2xl leading-9 dark:text-lightGray">
          Algoblog este un blog despre diverse teme creat de Bogdan Rezuș și
          Rareș Oprea pentru atestatul la informatică.
        </p>
        <p className="max-w-3xl py-2 text-2xl leading-9 dark:text-lightGray">
          Site-ul este construit folosind{" "}
          <a
            className="underline underline-offset-8 hover:text-gray-500 dark:text-almostWhite hover:dark:text-lightGray"
            href="https://nextjs.org/"
          >
            Next.js
          </a>
          ,{" "}
          <a
            className="underline underline-offset-8 hover:text-gray-500 dark:text-almostWhite hover:dark:text-lightGray"
            href="https://tailwindcss.com/"
          >
            Tailwind CSS
          </a>{" "}
          și{" "}
          <a
            className="underline underline-offset-8 hover:text-gray-500 dark:text-almostWhite hover:dark:text-lightGray"
            href="https://www.markdownguide.org/getting-started/"
          >
            Markdown
          </a>
          . Proiectul este pe{" "}
          <a
            className="underline underline-offset-8 hover:text-gray-500 dark:text-almostWhite hover:dark:text-lightGray"
            href="https://github.com/bogdanrezus/atestat"
          >
            GitHub
          </a>
          .
        </p>
      </section>
      <Link
        className="mt-8 mb-16 inline-block text-2xl text-red-500 hover:text-red-400"
        href="/"
      >
        &larr; Pagina principală
      </Link>
    </div>
  );
}
