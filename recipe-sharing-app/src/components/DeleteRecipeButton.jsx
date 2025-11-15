// src/components/DeleteRecipeButton.jsx
import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // redirect to home after deletion
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: "8px 12px",
        backgroundColor: "red",
        color: "white",
        borderRadius: "6px",
        cursor: "pointer",
        border: "none",
        marginTop: "10px",
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
