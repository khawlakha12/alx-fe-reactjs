import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === id)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients?.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <h3>Steps</h3>
      <ol>
        {recipe.steps?.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ol>

      <Link to={`/edit/${id}`}>Edit</Link>
      <DeleteRecipeButton recipeId={id} onDeleted={() => navigate("/")} />
    </div>
  );
};

export default RecipeDetails;
