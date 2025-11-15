import create from 'zustand'


export const useRecipeStore = create((set, get) => ({
recipes: [
{
id: '1',
title: 'Spaghetti Aglio e Olio',
description: 'Simple garlic and olive oil spaghetti.',
ingredients: ['spaghetti', 'garlic', 'olive oil', 'red pepper flakes', 'parsley'],
steps: ['Boil pasta', 'Sauté garlic', 'Toss together', 'Serve']
},
{
id: '2',
title: 'Tomato Basil Soup',
description: 'Comforting tomato soup with fresh basil.',
ingredients: ['tomatoes', 'onion', 'garlic', 'basil', 'cream'],
steps: ['Roast tomatoes', 'Blend', 'Simmer', 'Serve']
}
],


addRecipe: (recipe) =>
set((state) => ({ recipes: [...state.recipes, recipe] })),


deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


updateRecipe: (updatedRecipe) =>
set((state) => ({
recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r))
}))
}))