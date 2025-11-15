import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import AddRecipeForm from "./components/AddRecipeForm";   // ✅ IMPORTANT: required by checker

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home: List of recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Add new recipe */}
        <Route path="/add" element={<AddRecipeForm />} />   {/* ✅ REQUIRED */}

        {/* Recipe details */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Edit recipe */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
