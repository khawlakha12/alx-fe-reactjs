import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page listing recipes */}
        <Route path="/" element={<RecipeList />} />

        {/* Details page */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />

        {/* Edit page */}
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
};

export default App;
