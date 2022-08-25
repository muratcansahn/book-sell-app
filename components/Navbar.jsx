import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex  bg-emerald-100 align-center justify-between ">
        <div className="flex ">
          <div className="relative pt-3 ">
            {" "}
            <Image src="/assets/book-icon.png" width={40} height={40} />
          </div>

          <p className="font-bold p-5">BOOK PURCHASE APP</p>
        </div>
        <div className="flex flex-col justify-center w-20 bg-emerald-300 ">
          <div className="flex align-center justify-center">
            <Image src="/assets/cart.png" width={30} height={30} />
            <span className="absolute top-1 right-5 text-s">1</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
