import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useEffect } from "react";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  useEffect(() => {
    const cart = document.querySelector(".cart");
    cart.classList.add("animate-waving-hand");
    setTimeout(() => {
      cart.classList.remove("animate-waving-hand");
    }, 1000);
  }, [products]);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <nav>
      <div className="flex  bg-emerald-100 align-center justify-between fixed w-full z-10">
        <Link href="/">
          <div className="flex ml-7 cursor-pointer">
            <div className="relative pt-3 ">
              {" "}
              <Image src="/assets/book-icon.png" width={40} height={40} />
            </div>

            <p className="font-bold p-5">BOOK PURCHASE APP</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center w-20 bg-emerald-300 ">
          <Link href="/cart">
            <div className="flex align-center justify-center cursor-pointer">
              <Image
                src="/assets/cart.png"
                width={30}
                height={30}
                className="  cart"
              />
              <div className="absolute top-3 right-5 text-s h-4 w-4 bg-white rounded-full flex items-center justify-center text-xs font-bold">
                {quantity}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
