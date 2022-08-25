import Head from "next/head";
import Image from "next/image";
import { Bookcard } from ".";

const Home = ({ books }) => {
  return (
    <div className="">
      <Head>
        <title>Book Selling App-Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center md:px-20 pt-20 text-center">
        <Bookcard books={books} />
      </main>
    </div>
  );
};

export default Home;
