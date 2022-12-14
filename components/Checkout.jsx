import { useSelector } from "react-redux";
import { Form, OrderSummary, EmptyCart } from ".";
import Head from "next/head";

const Checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);

  return (
    <>
      <Head>
        <title>Book Selling App-Checkout Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.length > 0 ? (
        <div className="pt-20">
          <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
              <div class="flex flex-col md:w-full md:mx-10">
                <h1 className="text-2xl font-bold text-center mb-15">
                  Total {total} PLN
                </h1>
                <h2 class="mb-4 font-bold md:text-xl text-heading ">
                  Shipping Address
                </h2>
                <Form products={products} />
              </div>
              <OrderSummary products={products} />
            </div>
          </div>
        </div>
      ) : (
        <div className="block md:flex pt-20 ">
          <EmptyCart />
        </div>
      )}
    </>
  );
};

export default Checkout;
