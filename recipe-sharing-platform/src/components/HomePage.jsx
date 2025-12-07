import { useState, useEffect } from "react";
import recipesData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <Link to={`/recipe/${recipe.id}`}>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-10">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        🍽️ Our Recipes
      </h1>

      {/* Responsive Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden 
                       transform transition-all duration-300 
                       hover:scale-105 hover:shadow-xl"
          >
            {/* Recipe Image */}
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />

            {/* Card Content */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed">
                {recipe.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Link>
  );
};

export default HomePage;
