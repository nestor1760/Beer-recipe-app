import React, { useState } from 'react'
import BeerItem from '../BeerItem/BeerItem'
import classes from './BeerList.module.css'
import Searcher from '../Searcher/Searcher'

const BeerList = ({ beers, addBeer, filterRecipe, recipe}) => {
  const [searchBeers, setSearchBeers] = useState(beers) 

  return (
    <>
      <Searcher beers={beers} searchBerrs={searchBeers} setSearchBeers={setSearchBeers}/>
      <div className={classes.beersContainer}>
        <div className={classes.beersList}>
          {(searchBeers.length > 0)
            ?
            searchBeers.map(beer => {
              return (
                <BeerItem beer={beer} recipe={recipe} key={beer.id} addBeer={addBeer} filterRecipe={filterRecipe}/>
              )
            })
            :
            <h1 style={{textAlign: 'center'}}>There is no such recipe</h1>
          }
            
          </div>
      </div>
    </>
  )
}

export default BeerList