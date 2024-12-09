import Recipe from '../Recipe/Recipe';
import { useState, useEffect } from 'react';

function    Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('/data/recipes.json')
          .then(response => response.json())
          .then(recipes => setRecipes(recipes))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold text-xl text-center">Simple and tasty recipes</h1>
                <p className="text-center text-slate-600">Lorem ipsum dolor sit amet, consectetuipisicing elit<br></br>tempor aliqut enim ad minim</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}/> )}
            </div>
        </div>
    );
}

export default Recipes;