import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(
      (item) => item.id === Number(id)
    );
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Recipe not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 md:p-10 space-y-8">

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {recipe.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-600 text-lg leading-relaxed">
            {recipe.summary}
          </p>

          {/* Ingredients Section (optional) */}
          {recipe.ingredients && (
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">
                🧾 Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions Section (optional) */}
          {recipe.instructions && (
            <div className="bg-gray-100 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">
                👩‍🍳 Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
