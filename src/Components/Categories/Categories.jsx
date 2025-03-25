import React, { useEffect, useState } from "react";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="w-full bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
      {/* category list */}
      <div className="space-y-2">
        {category.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.category_name)}
            className={`w-full py-2 px-4 text-left  rounded-md  ${
              selectedCategory === cat.category_name
                ? "bg-blue-600 text-white shadow-lg "
                : "bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200"
            }`}
          >
            {cat.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
