import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/productsSlice";
import { addToCart } from "../redux/productsSlice";

const Products = () => {
  const ratingColor = {
    highRatting: "bg-green-400",
    lowRatting: "bg-yellow-500",
  };
  const data = useSelector((state) => state.app.products);
  const filterData = data.filter(
    (item) => item.category !== "jewelery" && item.category !== "electronics"
  );
  const updateFilter = filterData.map((item) => ({ ...item, quantity: 1 }));

  const dispatchProducts = useDispatch();
  useEffect(() => {
    dispatchProducts(getData());
  }, []);

  return (
    <div className=" bg-gray-100 overflow-hidden">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {updateFilter.map((product) => {
            return (
              <div
                key={product.id}
                className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#">
                  <img
                    className="object-cover block mx-auto"
                    src={product.image}
                    alt="product image"
                  />
                  <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white capitalize">
                    {product.category}
                  </span>
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl truncate tracking-tight text-slate-900">
                      {product.title}
                    </h5>
                  </a>
                  <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${product.price}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <span
                        className={`mr-2 ml-3 rounded ${
                          product.rating.rate > 4
                            ? ratingColor.highRatting
                            : ratingColor.lowRatting
                        } px-2.5 py-0.5 text-xs font-semibold`}>
                        {product.rating.rate}
                      </span>
                    </div>
                  </div>
                  <a
                    onClick={() => dispatchProducts(addToCart(product))}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
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
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
