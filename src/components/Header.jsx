import Logo from "../assets/logo.svg";
import cartLogo from "../assets/cart3.svg";
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
                <img className="w-6" src={cartLogo} alt="cart-img" />
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
