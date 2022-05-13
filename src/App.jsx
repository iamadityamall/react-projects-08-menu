import React from "react";
import Menu from "./Menu";
import items from "./data";
import { useState, useEffect } from "react";
import Categories from "./Categories";

const allCategories = () => {
  const uniqueCat = new Set(items.map((item) => item.category));
  const newArray = ["all", ...uniqueCat];
  return newArray;
};

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories] = useState(allCategories);

  useEffect(() => {
    document.title = "menu";
  }, []);

  const filterCategory = (category) => {
    if (category === "all") {
      return setMenuItems(items);
    } else {
      let newItems = items.filter((item) => item.category === category);
      return setMenuItems(newItems);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-10 space-y-10">
      <section className="flex flex-col items-center justify-center mt-10 space-y-2">
        <h2 className="text-xl capitalize font-bold leading-relaxed lg:text-2xl">
          our menu
        </h2>
        <div className="h-1 w-20 rounded-sm bg-blue-400"></div>
      </section>
      <section className="flex flex-col space-y-10">
        <div>
          <h4
            className="text-center font-mono pb-2 lg:text-xl
          "
          >
            click to filter ⬇️
          </h4>
          <Categories filterCategory={filterCategory} categories={categories} />
        </div>
        <div>
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
};

export default App;
