import React from "react";

const Menu = ({ items }) => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 space-y-5 md:grid md:grid-cols-2 md:space-y-0 md:gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:mx-40"
    >
      {items.map((item) => {
        const { id, title, category, price, img, desc } = item;
        return (
          <article
            key={id}
            className="w-full p-2 bg-gray-200 rounded-lg h-full"
          >
            <img
              src={img}
              alt={title}
              className="rounded-lg object-cover h-32 w-full"
            />
            <header className="flex justify-between capitalize text-[12px] font-mono font-bold py-2">
              <p>{category}</p>
              <p>${price}</p>
            </header>
            <div className="h-[1px] w-full bg-blue-400"></div>

            <p className="text-xs leading-relaxed text-left py-2 font-mono">
              {desc}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Menu;
