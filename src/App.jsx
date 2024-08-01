import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import RecipeCard from './RecipeCard';

const API_ID = "2f26d578";
const API_KEY = "5d5f2265ddc5695214f78d350a248e67";
const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${API_ID}&app_key=${API_KEY}&q=`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRecipes = async (query) => {
    const response = await fetch(`${API_URL}${query}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  useEffect(() => {
    searchRecipes(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>What you are having today?</h1>

      <div className="search">
        <input
          placeholder="Search for recipes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchRecipes(searchTerm)}
        />
      </div>

      {recipes?.length > 0 ? (
        <div className="container">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Recipes Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
