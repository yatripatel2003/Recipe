import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.label} />
            <div className="recipe-details">
                <h3>{recipe.label}</h3>
                <p>Calories: {Math.round(recipe.calories)} Kcal</p>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
            </div>
        </div>
    );
};

export default RecipeCard;
