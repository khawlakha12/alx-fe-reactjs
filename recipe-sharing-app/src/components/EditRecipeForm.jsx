import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import React, { useEffect, useState } from "react";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Local form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Load existing recipe for editing
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setIngredients(recipe.ingredients.join("\n"));
      setSteps(recipe.steps.join("\n"));
    }
  }, [recipe]);

  // FORM SUBMISSION
  const handleSubmit = (event) => {
    event.preventDefault(); // REQUIRED ✔ FIXED

    const updatedData = {
      id: id || String(Date.now()), // Keep same ID when editing
      title,
      description,
      ingredients: ingredients.split("\n").filter(Boolean),
      steps: steps.split("\n").filter(Boolean),
    };

    if (id) {
      updateRecipe(updatedData); // Edit mode
      navigate(`/recipes/${id}`);
    } else {
      addRecipe(updatedData); // Create mode
      navigate(`/recipes/${updatedData.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Recipe" : "Add New Recipe"}</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Description */}
      <textarea
        placeholder="Recipe description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Ingredients */}
      <textarea
        placeholder="Ingredients (one per line)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />

      {/* Steps */}
      <textarea
        placeholder="Steps (one per line)"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />

      <button type="submit">{id ? "Save Changes" : "Create Recipe"}</button>
    </form>
  );
};

export default EditRecipeForm;
