const Bookcard = ({ books }) => {
  console.log(books);
  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <div class="w-full max-w-sm bg-white m-7 rounded-lg shadow-md">
          <a href="#">
            <img
              class="p-8 rounded-t-lg"
              src={book.cover_url}
              alt="book_image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h2 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h2>
            </a>
            <h5 class="text-gray-500  my-2">{book.author}</h5>
            <p className="text-gray my-5"> {book.pages} pages </p>

            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-gray-900 dark:text-white">
                {book.price} {book.currency}
              </span>

              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookcard;
