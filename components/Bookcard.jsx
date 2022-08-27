import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import Image from "next/image";
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
      {books.map((book, i) => (
        <div
          className="w-full max-w-sm bg-white m-7 rounded-lg shadow-md"
          key={i}
        >
          <Image
            src={book.cover_url}
            alt="book_image"
            width={250}
            height={300}
          />

          <div className="px-5 pb-5">
            <a href="#">
              <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {book.title}
              </h2>
            </a>
            <h5 className="text-gray-500  my-2">{book.author}</h5>
            <p className="text-gray my-5"> {book.pages} pages </p>

            <div className="flex justify-between items-center flex-col md:flex-row">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {book.price} {book.currency}
              </span>
              <div className="flex mt-4 md:m-0">
                <button
                  onClick={() => handleClick(book.id)}
                  className="text-white bg-emerald-300 hover:bg-emerald-500 focus:ring-4 focus:outline-none mx-3 md:mx-1 focus:ring-blue-300 font-medium rounded-lg  text-lg md:text-sm px-4 py-2.5 text-center"
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
