import Image from "next/image";
const OrderBookCard = ({ product }) => {
  return (
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
        <span class="text-red-600">Price</span> {product.price} PLN
      </div>
    </div>
  );
};

export default OrderBookCard;
