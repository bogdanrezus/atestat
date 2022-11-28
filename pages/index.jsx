import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";

import { getSortedArticlesData } from "../lib/articles";

export default function Home({ allArticlesData }) {
  return (
    <div className="p-5">
      <Head>
        <title>Atestat</title>
      </Head>
      <section>
        <h1 className="my-16 text-5xl dark:text-almostWhite">
          Pagina principală
        </h1>
        <p className="max-w-3xl text-xl leading-9 dark:text-lightGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          tempore eos neque quas totam corporis minus doloremque nisi. Repellat
          recusandae culpa eaque, ipsam delectus, aliquam rerum optio molestiae
          deleniti dolorum cumque nostrum cum commodi tempore iste inventore
          ipsa iusto veniam architecto alias quidem modi eius voluptatibus eos?
          Autem, asperiores mollitia.
        </p>
      </section>
      <section>
        <h2 className="my-8 text-3xl dark:text-almostWhite">
          Cele mai noi articole:
        </h2>
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
