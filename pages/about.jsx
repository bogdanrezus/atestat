import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-5">
      <Head>
        <title>Despre noi - Atestat</title>
      </Head>
      <section>
        <h1 className="my-16 text-5xl dark:text-almostWhite">Despre noi</h1>
        <p className="max-w-3xl text-xl leading-9 dark:text-lightGray">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          tempore eos neque quas totam corporis minus doloremque nisi. Repellat
          recusandae culpa eaque, ipsam delectus, aliquam rerum optio molestiae
          deleniti dolorum cumque nostrum cum commodi tempore iste inventore
          ipsa iusto veniam architecto alias quidem modi eius voluptatibus eos?
          Autem, asperiores mollitia.
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
