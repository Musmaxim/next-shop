import { FiShoppingCart } from "react-icons/fi";

const ShoppingCartButton = () => {
  return (
    <div className="relative">
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full">
        6
      </span>
      <FiShoppingCart cursor={"pointer"} size={24} />
    </div>
  );
};

export default ShoppingCartButton;
