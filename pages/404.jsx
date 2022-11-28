import Link from "next/link";

export default function Error404() {
  return (
    <div className="p-5">
      <h1 className="mt-16 text-5xl dark:text-almostWhite">404</h1>
      <h2 className="my-8 text-5xl dark:text-almostWhite">
        Oops... se pare că a intervenit o eroare.
      </h2>
      <p className="my-8 text-3xl dark:text-lightGray">
        Pagina nu a putut fi găsită.
      </p>
      <Link
        className="mt-16 inline-block text-2xl text-red-500 hover:text-red-400"
        href="/"
      >
        &larr; Pagina principală
      </Link>
    </div>
  );
}
