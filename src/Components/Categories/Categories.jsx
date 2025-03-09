import React, { useEffect, useState } from "react";

const Categories = ({ setSelectedCategory, selectedCategory }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="flex  flex-col md:flex-row gap-6">
      {/* category list */}
      <div className="w-full bg-gray-100 shadow-lg p-3 rounded-lg">
        {category.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.category_name)}
            className={`block w-full p-3 mb-2 text-left rounded-md ${
              selectedCategory === cat.category_name
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
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
