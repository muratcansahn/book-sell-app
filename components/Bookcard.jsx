import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Bookcard = ({ books }) => {
  const dispatch = useDispatch();
  const notify = () => toast.success("Book Successfully Added to Cart");

  const handleClick = (id) => {
    const found = books.find((book) => book.id === id);
    dispatch(
      addProduct({
        author: found.author,
        image: found.cover_url,
        id: found.id,
        pages: found.pages,
        price: found.price,
        title: found.title,
        quantity: 1,
        currency: found.currency,
      })
    );
    notify();
  };
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

            <div class="flex justify-between items-center flex-col md:flex-row">
              <span class="text-2xl font-bold text-gray-900 dark:text-white">
                {book.price} {book.currency}
              </span>
              <div div className="flex mt-4 md:m-0">
                <button
                  onClick={() => handleClick(book.id)}
                  class="text-white bg-emerald-300 hover:bg-emerald-500 focus:ring-4 focus:outline-none mx-3 md:mx-1 focus:ring-blue-300 font-medium rounded-lg  text-lg md:text-sm px-4 py-2.5 text-center"
                >
                  Add to cart
                </button>
                <ToastContainer position="top-center" autoClose={3000} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bookcard;
