import Logo from "../assets/logo.svg";
import cartLogo from "../assets/cart3.svg";
import Logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import toast from "react-hot-toast";

const Header = () => {
  const { cartProducts } = useSelector((state) => state.app);

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="ms-10 mt-2 me-2 mb-2 p-2">
          <img className="w-10" src={Logo} alt="logo" />
        </div>
        <div className="relative m-3 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="search"
          />
        </div>
        <div>
          <ul className="flex ">
            <Link to="/cart">
              <li className="mt-2 p-1 cursor-pointer flex text-red-500 font-bold text-xl">
                <img className="w-6" src={cartLogo} alt="cart-img" />
                {cartProducts.length}
              </li>
            </Link>
            <li className="mt-2 mb-2 ms-4 me-4  p-2 ">Welcome Noman</li>
            <li className="m-2 p-2 cursor-pointer me-10 mt-2 ms-2 mb-2 flex hover:bg-slate-100">
              <img className="me-2 " src={Logout} alt="logout-img " /> Logout
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex justify-between ">
        <div>
          <ul className="flex">
            <li className="ms-10 mt-2 me-10 mb-2 p-2 cursor-pointer hover:bg-slate-100">
              Home
            </li>
            <li className="m-2 p-2 cursor-pointer hover:bg-slate-100">
              Products
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
