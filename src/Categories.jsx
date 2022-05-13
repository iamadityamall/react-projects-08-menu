import React from "react";

const Categories = ({ filterCategory, categories }) => {
  return (
    <>
      <div className="flex space-x-2 justify-center lg:space-x-5">
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterCategory(category)} className="text-sm font-mono font-semibold text-blue-400 lg:text-xl">
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
