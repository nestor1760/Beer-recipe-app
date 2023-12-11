import React from 'react';
import './HomePage.css';
import Header from '../Header/Header';
import BeerList from '../BeerList/BeerList';
import Pagination from '../Pagination/Pagination'

const HomePage = ({beers, page, setPage, recipe, filterRecipe, addBeer}) => {
  return (
    <div className='HomePage'> 
      <Header recipe={recipe} filterRecipe={filterRecipe}/>
      <BeerList beers={beers} addBeer={addBeer} filterRecipe={filterRecipe} recipe={recipe}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default HomePage;