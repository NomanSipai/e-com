import { Link } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Register = () => {
  // const { users, setUsers, handleRegisterData } = useContext(BlogContext);
  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    cpassword: "",
    term: false,
  });
  const redirect = useNavigate();
  const handleRegisterData = async (e) => {
    e.preventDefault();
    if (users.email === "") {
      return toast.error("please Fill Email");
    } else if (users.name === "") {
      return toast.error("Please fill Name");
    } else if (users.password === "") {
      return toast.error("Please Fill Password");
    } else if (users.cpassword === "") {
      toast.error("Please Fill Confirm Password");
    } else if (users.password !== users.cpassword) {
      setUsers({ password: "", cpassword: "" });
      return toast.error("Password and Confirm Password must be same");
    } else if (users.term !== true) {
      return toast.error("please accept the Terms and Conditions");
    } else {
      await axios
        .post("https://65ed97e008706c584d9a24e0.mockapi.io/blog-app-register", {
          email: users.email,
          name: users.name,
          password: users.password,
          cpassword: users.cpassword,
          terms: users.term,
        })
        .then(() => {
          setUsers({
            email: "",
            password: "",
            cpassword: "",
            term: false,
            name: "",
          });
          redirect("/");
        });
    }
  };
  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleRegisterData}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="John"
                  required=""
                  value={users.name}
                  onChange={(e) => setUsers({ ...users, name: e.target.value })}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                  value={users.email}
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                  value={users.password}
                  onChange={(e) =>
                    setUsers({ ...users, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 ">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                  value={users.cpassword}
                  onChange={(e) =>
                    setUsers({ ...users, cpassword: e.target.value })
                  }
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                    value={users.term}
                    onChange={(e) =>
                      setUsers({ ...users, term: e.target.checked })
                    }
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 ">
                    I accept the
                    <a
                      className="font-medium text-primary-600 hover:underline "
                      href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account?
                <Link
                  to="/login"
                  className="font-medium text-primary-600 hover:underline ">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
