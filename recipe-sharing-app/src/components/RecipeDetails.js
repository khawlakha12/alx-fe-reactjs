import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'


const RecipeDetails = () => {
const { id } = useParams()
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
const navigate = useNavigate()


if (!recipe) {
return (
<div>
<p>Recipe not found.</p>
<button onClick={() => navigate(-1)}>Go back</button>
</div>
)
}


return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>


<h4>Ingredients</h4>
<ul>
{recipe.ingredients?.map((ing, idx) => (
<li key={idx}>{ing}</li>
))}
</ul>


<h4>Steps</h4>
<ol>
{recipe.steps?.map((step, idx) => (
<li key={idx}>{step}</li>
))}
</ol>


<div style={{ marginTop: 12 }}>
<Link to={`/edit/${recipe.id}`} style={{ marginRight: 8 }}>Edit</Link>
<DeleteRecipeButton recipeId={recipe.id} onDeleted={() => navigate('/')} />
</div>
</div>
)
}


export default RecipeDetails