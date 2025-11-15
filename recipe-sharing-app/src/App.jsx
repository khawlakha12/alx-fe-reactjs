import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'


export default function App() {
return (
<div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
<h2>Recipe Sharing App</h2>
<nav>
<Link to="/" style={{ marginRight: 12 }}>Home</Link>
<Link to="/add">Add</Link>
</nav>
</header>


<main style={{ marginTop: 20 }}>
<Routes>
<Route path="/" element={<RecipeList />} />
<Route path="/recipes/:id" element={<RecipeDetails />} />
<Route path="/edit/:id" element={<EditRecipeForm />} />
{/* Optional Add route can reuse EditRecipeForm with no id */}
<Route path="/add" element={<EditRecipeForm />} />
</Routes>
</main>
</div>
)
}