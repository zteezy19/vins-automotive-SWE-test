import Link from "next/link";

export async function getData() {
  const res = await fetch("https://fakerapi.it/api/v1/books");
  const data = await res.json();
  return data.data;
}
export default async function IndexPage() {
  const data = await getData();

  return (
    <div>
      <h1>List of Books</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Description</th>
            <th>ISBN</th>
            <th>Published Date</th>
            <th>Publisher</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book: Book, index: number) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>
                <Link href={`/book/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
              <td>{book.isbn}</td>
              <td>{book.published}</td>
              <td>{book.publisher}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
