import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();  // URL param /recipes/:id
  const navigate = useNavigate();

  // Get recipe safely from the store
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  // If recipe does NOT exist → show a safe message
  if (!recipe) {
    return (
      <div>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Ingredients */}
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Steps */}
      <h3>Steps</h3>
      <ol>
        {recipe.steps?.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link to={`/edit/${recipe.id}`}>Edit Recipe</Link>

      <DeleteRecipeButton
        recipeId={recipe.id}
        onDeleted={() => navigate("/")}
      />
    </div>
  );
};

export default RecipeDetails;
