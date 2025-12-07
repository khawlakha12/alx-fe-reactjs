import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert textarea text into arrays
    const ingredientsArray = ingredients
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    const stepsArray = steps
      .split("\n")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    // Validation
    if (!title || ingredientsArray.length === 0 || stepsArray.length === 0) {
      setError("All fields are required.");
      return;
    }

    if (ingredientsArray.length < 2) {
      setError("Please enter at least 2 ingredients.");
      return;
    }

    setError("");

    // Mock submit (you can later send to backend)
    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      instructions: stepsArray,
    };

    console.log("Recipe submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    alert("Recipe added successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-8">
          ➕ Add New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              rows="5"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Example: 2 eggs"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Preparation Steps (one per line)
            </label>
            <textarea
              rows="5"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              placeholder="Example: Mix ingredients"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-red-500 text-sm text-center">
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold 
                       hover:bg-blue-700 transition duration-300"
          >
            Submit Recipe
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
