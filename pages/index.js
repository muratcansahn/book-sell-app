import { Home } from "../components";
const HomePage = ({ books }) => {
  return <Home books={books} />;
};

export default HomePage;

export async function getStaticProps() {
  const books = await fetch("http://localhost:3001/api/book").then((res) =>
    res.json()
  );
  return {
    props: { books: books.data },
  };
}
