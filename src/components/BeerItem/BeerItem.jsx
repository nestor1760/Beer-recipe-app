import React from 'react';
import classes from './BeerItem.module.css'

const BeerItem = ({beer, addBeer, recipe, filterRecipe}) => {
  const {id, name, description, ingredients, image_url} = beer

  const beerId = id
  const beerInRecipe = recipe.some(item => item.id === beerId);

  return (
    <div className={classes.itemContainer}>
        <div>
          <img src={image_url} className={classes.itemImg} alt={name}/> 
        </div>
        <div className={classes.itemInfoContainer}>
          <p className={classes.titleItem}>{name}</p>
          <p className={classes.itemDescription}>{description}</p>
          <p className={classes.titleItem}>Ingredients: </p>
          <div className={classes.itemIngredients}>
            {ingredients.hops.map((ingredient, index) => 
              <div style={{marginRight: '5px'}} key={index}>{ingredient.name},</div>
            )}
          </div>
        </div>
        <div>
          {(beerInRecipe)
            ?
              <button onClick={() => filterRecipe(beer)}className={classes.itemBtn}>Remove from recipe</button>
            :
              <button onClick={() => addBeer(beer)} className={classes.itemBtn}>Add to recipe</button>
          }
          
        </div>
    </div>
  )
}
  
export default BeerItem