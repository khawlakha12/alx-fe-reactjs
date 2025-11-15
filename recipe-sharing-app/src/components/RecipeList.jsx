import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from '../store/recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore((s) => s.recipes)


return (
<div>
<h3>All Recipes</h3>
{recipes.length === 0 && <p>No recipes yet.</p>}
<ul>
{recipes.map((r) => (
<li key={r.id} style={{ marginBottom: 8 }}>
<Link to={`/recipes/${r.id}`} style={{ fontWeight: 600 }}>{r.title}</Link>
<div style={{ fontSize: 13, color: '#555' }}>{r.description}</div>
</li>
))}
</ul>
</div>
)
}


export default RecipeList