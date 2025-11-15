import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import SearchBar from "./SearchBar";
import FavoritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Filter initially (or after refreshing)
  useEffect(() => {
    filterRecipes();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipes</h1>

      <SearchBar />

      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id} style={{ margin: "12px 0" }}>
              <Link to={`/recipes/${recipe.id}`} style={{ fontSize: "18px" }}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
