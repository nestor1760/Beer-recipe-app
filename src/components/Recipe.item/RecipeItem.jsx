import React from 'react';
import style from './RecipeItem.module.css' 

const RecipeItem = ({beer, filterRecipe}) => {
  return (
    <div className={style.recipeItemContainer}>
      <div className={style.recipeItemImg}>
        <img src={beer.image_url} alt={beer.name}/>
      </div>
      <div className={style.recipeItemInfo}>
        <h3>{beer.name}</h3>
          <p>{beer.brewers_tips}</p> 
      </div>
      <div>
        <button className={style.recipeItemBtn} onClick={() => filterRecipe(beer)}>Delete</button>
      </div>
    </div>
  )
}

export default RecipeItem