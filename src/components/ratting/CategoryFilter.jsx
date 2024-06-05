import { filterCategory } from "../../redux/productsSlice";

import { useDispatch } from "react-redux";

const CategoryFilter = () => {
  const buttons = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center flex-col container mx-auto px-4">
      <div className="flex justify-center items-center mt-5">
        {buttons.map((button, i) => {
          return (
            <button
              key={i}
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              onClick={() => dispatch(filterCategory(button))}
              className=" border-1 border-black p-2 ring-1 ring-gray-300 me-3 focus:ring-4 focus:bg-gray-800 focus:text-white focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              type="button">
              {button}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
