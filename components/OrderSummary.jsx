import { OrderBookCard } from "./";
const OrderSummary = ({ products }) => {
  return (
    <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
      <div class="pt-12 md:pt-0 2xl:ps-4">
        <h2 class="text-xl font-bold">Order Summary</h2>
        <div class="mt-8">
          <div class="flex flex-col space-y-4">
            {products.map((product) => (
              <OrderBookCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
