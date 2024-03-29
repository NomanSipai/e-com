import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/productsSlice";
import { addToCart } from "../redux/productsSlice";

const Products = () => {
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
            console.log(product.quantity);
            return (
              <div key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7 p-3">
                  <img
                    src={product.image}
                    alt={product.category}
                    className="group-hover:opacity-75 block me-auto ms-auto p-1 h-60  w-40"
                  />

                  <h3 className="mt-4  text-gray-900 bg-white text-base">
                    {product.category}
                  </h3>
                  <h2 className="mt-4 text-sm text-gray-700 bg-white h-5 overflow-hidden">
                    {product.title}
                  </h2>

                  <p className="mt-2 text-lg font-medium text-red-600 bg-white">
                    $ {product.price}
                  </p>
                  <button
                    className="bg-indigo-600 p-2 rounded text-sm text-white mt-2 w-full hover:text-slate-300"
                    onClick={() => dispatchProducts(addToCart(product))}>
                    Add To Cart
                  </button>
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
