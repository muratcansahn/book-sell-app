import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="flex  bg-emerald-100 align-center justify-center ">
        <div className="relative pt-3">
          {" "}
          <Image src="/assets/book-icon.png" width={40} height={40} />
        </div>
        <p className="font-bold p-5">BOOK PURCHASE APP</p>
      </div>
    </nav>
  );
};

export default Navbar;
