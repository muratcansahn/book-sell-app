import React from "react";
import { useSelector } from "react-redux";
const cart = () => {
  const products = useSelector((state) => state.cart.products);
  console.log(products);
  let discount = 0;
  return (
    <div className="block md:flex pt-20 ">
      <div class="overflow-x-auto relative w-full md:w-[65%] md:h-[calc(100vh-140px)] m-5 ">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">
                Book Name
              </th>
              <th scope="col" class="py-3 px-6">
                Author{" "}
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr class="bg-white border-b">
                <>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {product.title}
                  </th>
                  <td class="py-4 px-6">{product.author}</td>
                  <td class="py-4 px-6">{product.price}</td>
                </>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" w-[50vw] md:w-[25vw]  h-[250px] p-10  text-center mx-auto my-5 bg-slate-200 flex flex-col">
        {" "}
        <h5 className="font-bold text-2xl"> Cart Total</h5>
        <div className="mt-4">
          {" "}
          <p>Subtotal :5</p>
          <p>Discount :{discount} </p>
          <p>Total:{5 - discount}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4 ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default cart;
