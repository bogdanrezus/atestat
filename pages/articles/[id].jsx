import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";

import { getAllArticleIds, getArticleData } from "../../lib/articles";

export default function Article({ articleData }) {
  const { title, author, date, contentHtml } = articleData;

  return (
    <div className="p-5">
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className="mt-16 mb-8 text-5xl dark:text-almostWhite">{title}</h1>
        <h2 className="my-2 text-2xl dark:text-lightGray">{author}</h2>
        <h2 className="my-2 text-2xl dark:text-lightGray">
          <Date date={date} />
        </h2>
        <div
          className="prose prose-lg my-16 prose-headings:font-normal prose-a:underline-offset-8 hover:prose-a:text-gray-500 dark:prose-invert dark:text-lightGray dark:prose-headings:text-almostWhite dark:prose-a:font-normal dark:prose-a:text-almostWhite hover:dark:prose-a:text-lightGray dark:prose-blockquote:border-l-lightGray dark:prose-blockquote:text-lightGray dark:prose-strong:font-normal dark:prose-strong:text-almostWhite dark:prose-pre:bg-almostBlack lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
      <Link
        className="mt-8 mb-16 inline-block text-2xl text-red-500 hover:text-red-400"
        href="/"
      >
        &larr; Pagina principală
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllArticleIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articleData = await getArticleData(params.id);
  return {
    props: {
      articleData,
    },
  };
}
