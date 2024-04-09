import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import SideCart from "./components/SideCart";
import { Toaster } from "react-hot-toast";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Products />}></Route>
        <Route path="/cart" element={<SideCart />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
