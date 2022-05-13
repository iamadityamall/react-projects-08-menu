import React from "react";

const Categories = ({ filterCategory, categories }) => {
  return (
    <>
      <div className="flex space-x-2 justify-center">
        {categories.map((category, index) => {
          return (
            <button key={index} onClick={() => filterCategory(category)} className="text-sm font-mono font-semibold text-blue-400">
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
