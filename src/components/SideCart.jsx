import { useDispatch, useSelector } from "react-redux";
import { increase } from "../redux/productsSlice";
import { decrease } from "../redux/productsSlice";
import { removeCartProducts } from "../redux/productsSlice";
import { handleCheckOut } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";
import EmtyCart from "./EmtyCart";

const SideCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartProducts } = useSelector((state) => state.app);

  const subTotal = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      {cartProducts.length === 0 ? (
        <EmtyCart />
      ) : (
        <div className=" min-h-screen bg-gray-100 pt-20">
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartProducts.map((product) => {
                const priceCal = product.price * product.quantity;
                return (
                  <div
                    key={product.id}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {product.title}
                        </h2>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() => dispatch(decrease(product.id))}
                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            -
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            readOnly
                            value={product.quantity}
                          />
                          <span
                            onClick={() => dispatch(increase(product.id))}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                            +
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">{`$${priceCal.toFixed(2)}`}</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() =>
                              dispatch(removeCartProducts(product.id))
                            }
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">${subTotal.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$0</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${subTotal.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button
                onClick={() => dispatch(handleCheckOut(navigate("/")))}
                className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideCart;
