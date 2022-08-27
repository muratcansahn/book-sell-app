import Link from "next/link";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../redux/cartSlice";
import { EmptyCart } from ".";
const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  let discount = 0;
  const dispatch = useDispatch();
  return (
    <>
      <Head>
        <title>Book Selling App-Cart Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="block md:flex pt-20 ">
        {products.length > 0 ? (
          <>
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
                        <td class="py-4 px-6">
                          {product.price} {product.currency}
                        </td>
                      </>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className=" w-[50vw] md:w-[25vw]  h-[290px] p-10  text-center mx-auto my-5 bg-emerald-100 rounded-sm flex flex-col">
              {" "}
              <h5 className="font-bold text-2xl"> Cart Total</h5>
              <div className="mt-4">
                {" "}
                <p>
                  Subtotal :{total} {products[0].currency}
                </p>
                <p>
                  Discount :{discount} {products[0].currency}
                </p>
                <p>Total :{total - discount} </p>
              </div>
              <Link href="/checkout">
                <button className="bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded-full mt-4 ">
                  Checkout
                </button>
              </Link>
              <button
                className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full mt-4 "
                onClick={() => dispatch(reset())}
              >
                Reset Cart
              </button>
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
    </>
  );
};

export default Cart;
