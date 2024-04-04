import Logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartProducts } = useSelector((state) => state.app);
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="ms-10 mt-2 me-2 mb-2 p-2">
          <img
            onClick={() => navigate("*")}
            className="w-10 cursor-pointer"
            src={Logo}
            alt="logo"
          />
        </div>

        <div>
          <ul className="flex ">
            <Link to="/cart">
              <li className="me-16 p-5 cursor-pointer flex text-red-500 font-bold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartProducts.length == 0 ? "" : cartProducts.length}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
