import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // Search actions
  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return {
        searchTerm: term,
        filteredRecipes: filtered,
      };
    }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // CRUD actions
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe], // keep in sync
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedList = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedList,
        filteredRecipes: updatedList,
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedList = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedList,
        filteredRecipes: updatedList,
      };
    }),
}));
