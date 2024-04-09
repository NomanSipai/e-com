import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/productsSlice";
import FourStar from "./ratting/FourStar";
import ThreeStar from "./ratting/ThreeStar";
import TwoStar from "./ratting/TwoStar";
import OneStar from "./ratting/OneStar";
import FiveStar from "./ratting/FiveStar";

const ProductDetail = () => {
  const data = useSelector((state) => state.app.productDetailsData);
  const dataInd = data.length - 1;
  const product = data[dataInd];
  const dispatch = useDispatch();
  console.log(product);
  return (
    <div className="font-[sans-serif] min-h-screen bg-gray-100">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 p-6">
          <div className="lg:col-span-3 w-full bg-white lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl relative">
              <img
                src={product.image}
                alt={product.tittle}
                className="w-96 h-96 me-auto ms-auto rounded object-contain"
              />
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#333]">
              {product.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-6">
              <p className="text-[#333] text-4xl font-bold">${product.price}</p>
              <p className="text-gray-400 text-xl">
                <strike>${(product.price * 1.2).toFixed(2)}</strike>
                <span className="text-sm ml-1">Tax included</span>
              </p>
              <div>
                <span className="font-bold text-gray-700 ">Availability:</span>
                <span className="text-gray-600">In Stock</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              {product.rating.rate > 4.5 && product.rating.rate <= 5 && (
                <FiveStar />
              )}
              {product.rating.rate > 4 && product.rating.rate <= 4.5 && (
                <FourStar />
              )}
              {product.rating.rate > 2.9 && product.rating.rate <= 3.9 && (
                <ThreeStar />
              )}
              {product.rating.rate > 1.9 && product.rating.rate <= 2.9 && (
                <TwoStar />
              )}
              {product.rating.rate >= 0 && product.rating.rate <= 2 && (
                <OneStar />
              )}

              <h4 className="text-[#333] text-base">
                {product.rating.count * (1.2).toFixed()} Reviews
              </h4>
            </div>
            <div className="mt-4">
              <span className="font-bold text-gray-700 ">Category :</span>
              <span className="text-gray-600 ms-2 ">{product.category}</span>
            </div>
            <div className="mt-4">
              <span className="font-bold  text-gray-700 ">Description :</span>
              <span className="text-gray-600 ms-2">{product.description}</span>
            </div>
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                onClick={() => dispatch(addToCart(product))}
                className=" w-full px-4 py-3 flex justify-center items-center bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
