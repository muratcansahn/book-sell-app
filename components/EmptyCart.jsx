import React from "react";
import Image from "next/image";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className="m-auto">
      <div className="">
        <Image src="/assets/emptycart.jpg" width={600} height={400} />
      </div>
      <h1 className="text-3xl font-bold text-center"> Your cart is empty</h1>
      <Link href="/">
        <p className="text-center text-lg mt-3 cursor-pointer">
          {" "}
          Click here to continue shopping
        </p>
      </Link>
    </div>
  );
};

export default EmptyCart;
