import React from 'react';
import style from './Recipe.module.css'
import RecipeItem from '../Recipe.item/RecipeItem';

const Recipe = ({recipe, setModalVisible, filterRecipe}) => {
  return (
    <>
    {
      (recipe.length === 0)
        ?
          <div>
            <h3>Your recipe list is empty :/</h3>
            <button className={style.recipeBtnClose} onClick={() => setModalVisible(false)}>Close</button>
          </div>
        :
        <>
          <div className={style.recipeHeader}>
        <h1 style={{textAlign: 'center', marginBottom: '10px', width: '90%'}}>Recipe:</h1>
        <button className={style.recipeBtnClose} onClick={() => setModalVisible(false)}>X</button>
      </div>
      <div className={style.recipeContainer}>
        {recipe.map(beer => 
          <RecipeItem key={beer.id} beer={beer} filterRecipe={filterRecipe}/>
        )}
      </div>
        </>
    }   
    </>
  )
}

export default Recipe