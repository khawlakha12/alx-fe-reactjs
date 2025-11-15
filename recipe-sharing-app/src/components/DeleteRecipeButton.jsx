import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)


const handleDelete = () => {
const confirmed = window.confirm('Are you sure you want to delete this recipe?')
if (!confirmed) return
deleteRecipe(recipeId)
if (typeof onDeleted === 'function') onDeleted()
}


return (
<button onClick={handleDelete} style={{ color: 'white', background: '#c0392b', border: 'none', padding: '6px 10px', borderRadius: 4 }}>
Delete
</button>
)
}


export default DeleteRecipeButton