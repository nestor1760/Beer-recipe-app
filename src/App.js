import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { dataBeers } from './store/API/dataAPi';
import './App.css';
import Loader from './UI/Loader/Loader';
import Error from './UI/Error/Error';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

const App = () => {
  const [page, setPage] = useState(1)
  const [recipe, setRecipe] = useState([])
  const {beers, loading, error} = useSelector(state => state.beer)

  const url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=15`
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dataBeers(url))
  }, [url])

  const addBeerToRecipe = (beer) => {
    const updateRecipe = [...recipe, beer]
    setRecipe(updateRecipe)
  }

  const filterRecipeBtn = (beer) => {
    const newArr = recipe.filter(p => beer.id !== p.id)
    setRecipe(newArr)
  }

  if(loading) {
    return (
      <Loader />
    )
  }

  if(error) {
    return (
      <Error />
    )
  }

  return (
    <div className='App'>
      <Routes>
        <Route 
          path='/' 
          element={
            <HomePage
              addBeer={addBeerToRecipe} 
              filterRecipe={filterRecipeBtn}
              beers={beers} 
              page={page} 
              setPage={setPage} 
              recipe={recipe} 
              setRecipe={setRecipe}
          />}/>  
      </Routes> 
    </div>
  )
}

export default App