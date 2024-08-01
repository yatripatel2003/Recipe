import { useState, useEffect } from 'react'
import SearchIcon from './search.svg'

const App2 = () => {

    const API_ID = "2f26d578";
    const API_KEY = "5d5f2265ddc5695214f78d350a248e67";
    const API_URL = `https://api.edamam.com/api/recipes/v2&type=public&api_id=${API_ID}&api_key=${API_KEY}&q=`;


    const [recipe, setRecipe] = useState([]);
    const [searchTerm, setSearchTerm] = useState(" ");

    const SearchItem = async (query) => {
        const response = await fetch(`${API_URL}&${query}`);
        const data = await response.json();
        setRecipe(data.hits);
    }

    useEffect(() => {
        SearchItem(searchTerm);
    }, []);
    return (
        <div className='app'>
            <h2>Recipes for today!!</h2>
            <div className='input'>
                <input type="text"
                    placeholder="Enter the recipe you are finding"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />

                <img src={SearchIcon} alt="search" onClick={() => SearchItem(searchTerm)} />

            </div>
        </div>

            {
        recipe.length > 0 ? (
            <div className='container'>
                {recipe.map((recipe, index) => {
                    <div key={index} className='weather-card'>
                        <h2>{recipe.name}</h2>
                        <p>Math.round(recipe.calories)</p>
                    </div>
                })}

            </div>
        )
                
            }
       
    )
}

export default App2