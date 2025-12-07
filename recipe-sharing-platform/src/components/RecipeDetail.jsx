import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-gray-600 text-lg">
        Recipe not found...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 flex justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover"
        />

        {/* Content */}
        <div className="p-8 space-y-6">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800">
            {recipe.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-600 text-lg leading-relaxed">
            {recipe.summary}
          </p>

        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
