import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";

import { getSortedArticlesData } from "../lib/articles";

export default function Home({ allArticlesData }) {
  return (
    <div className="p-5">
      <Head>
        <title>Algoblog</title>
      </Head>
      <section>
        <h1 className="my-16 text-5xl dark:text-almostWhite">Bine ai venit!</h1>
        <h3 className="max-w-3xl pb-4 text-3xl leading-9 dark:text-lightGray">
          Aici poți găsi articole despre algoritmi și nu numai, cum ar fi:
        </h3>
      </section>
      <section>
        <ul>
          {allArticlesData.map(({ id, title, author, date }) => (
            <li key={id} className="my-4">
              <Link
                className="text-2xl text-red-500 hover:text-red-400"
                href={`/articles/${id}`}
              >
                {title}
              </Link>
              <p className="text-lg dark:text-lightGray">
                {author} &#x2022; <Date date={date} />
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData();
  return {
    props: {
      allArticlesData,
    },
  };
}
