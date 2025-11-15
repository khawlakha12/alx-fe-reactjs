import React, { useState, useEffect } from 'react'
const updateRecipe = useRecipeStore((s) => s.updateRecipe)


const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [ingredients, setIngredients] = useState('')
const [steps, setSteps] = useState('')


useEffect(() => {
if (recipeFromStore) {
setTitle(recipeFromStore.title || '')
setDescription(recipeFromStore.description || '')
setIngredients((recipeFromStore.ingredients || []).join('\n'))
setSteps((recipeFromStore.steps || []).join('\n'))
} else {
// if adding new recipe, clear fields
setTitle('')
setDescription('')
setIngredients('')
setSteps('')
}
}, [recipeFromStore])


const handleSubmit = (e) => {
e.preventDefault()
const payload = {
id: id || makeId(),
title: title.trim(),
description: description.trim(),
ingredients: ingredients.split('\n').map((s) => s.trim()).filter(Boolean),
steps: steps.split('\n').map((s) => s.trim()).filter(Boolean)
}


if (id) {
updateRecipe(payload)
navigate(`/recipes/${id}`)
} else {
addRecipe(payload)
navigate(`/recipes/${payload.id}`)
}

return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600 }}>
    <h3>{id ? 'Edit Recipe' : 'Add Recipe'}</h3>
    
    
    <div style={{ marginBottom: 8 }}>
    <label>Title</label>
    <input value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%' }} />
    </div>
    
    
    <div style={{ marginBottom: 8 }}>
    <label>Description</label>
    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={2} style={{ width: '100%' }} />
    </div>
    
    
    <div style={{ marginBottom: 8 }}>
    <label>Ingredients (one per line)</label>
    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows={4} style={{ width: '100%' }} />
    </div>
    
    
    <div style={{ marginBottom: 8 }}>
    <label>Steps (one per line)</label>
    <textarea value={steps} onChange={(e) => setSteps(e.target.value)} rows={6} style={{ width: '100%' }} />
    </div>
    
    
    <div>
    <button type="submit" style={{ marginRight: 8 }}>{id ? 'Save' : 'Create'}</button>
    <button type="button" onClick={() => navigate(id ? `/recipes/${id}` : '/')}>Cancel</button>
    </div>
    </form>
    )
    }
    
    
    export default EditRecipeForm