import { Link } from "react-router-dom";

const EmtyCart = () => {
  return (
    <div className="px-4 min-h-screen bg-gray-100 text-center py-10 rounded-xl relative">
      <div className="w-4/5 me-auto ms-auto bg-white px-10 py-10">
        <img
          src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="emty-cart image"
          className="w-1/5 mb-3 me-auto ms-auto rounded object-contain"
        />
        <div className=" mt-3 text-xl">Your cart is empty</div>
        <div className="mt-3 text-xs">Add items to it now.</div>
        <div className="flex flex-wrap gap-4 mt-5">
          <Link
            to="*"
            className="ms-auto me-auto px-10 py-3 flex justify-center items-center bg-[#2874f0] hover:bg-[#5893f3] text-white text-sm font-bold rounded">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmtyCart;
