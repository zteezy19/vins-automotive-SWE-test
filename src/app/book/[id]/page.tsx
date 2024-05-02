async function getData(id: any) {
  const res = await fetch(`https://fakerapi.it/api/v1/books/`);
  const data = await res.json();
  return data.data;
}

export default async function BookDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const books = await getData(params.id);
  const book = books.find((v: any) => v.id == params.id);

  return (
    <div>
      <h1>Title: {book.title}</h1>
      <p>Genre: {book.genre}</p>
      <p>Description: {book.description}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Published Date: {book.publishedDate}</p>
      <p>Publisher: {book.publisher}</p>
    </div>
  );
}
