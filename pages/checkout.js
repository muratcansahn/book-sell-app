import { useSelector } from "react-redux";
import Image from "next/image";
import { Form } from "../components";

const checkout = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  console.log("products", products);
  return (
    <div className="pt-20">
      <div class="container p-12 mx-auto">
        <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div class="flex flex-col md:w-full">
            <h1 className="text-2xl font-bold text-center mb-15">
              Total {total} PLN
            </h1>
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <Form products={products} />
          </div>
          <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div class="pt-12 md:pt-0 2xl:ps-4">
              <h2 class="text-xl font-bold">Order Summary</h2>
              <div class="mt-8">
                <div class="flex flex-col space-y-4">
                  {products.map((product) => (
                    <div class="flex space-x-4">
                      <div>
                        <div className="">
                          <Image
                            src={product.image}
                            alt={product.title}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                      <div>
                        <h2 class="text-m font-bold">{product.title}</h2>
                        <p class="text-sm">{product.author}</p>
                        <span class="text-red-600">Price</span> {product.price}{" "}
                        PLN
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;
