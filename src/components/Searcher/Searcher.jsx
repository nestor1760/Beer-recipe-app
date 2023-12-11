import React, { useState } from 'react';
import classes from './Searcher.module.css'

const Searcher = ({beers, setSearchBeers}) => {
  const [input, setInput] = useState('')

  const clearSearch = (e) => {
    e.preventDefault()
    setInput('')
    setSearchBeers(beers)
  }

  const handlerSearch = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)

    const filteredBeers = beers.filter(item =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchBeers(filteredBeers)
  }

  

  return (
    <form className={classes.inputForm}>
      <input 
        value={input}
        onChange={handlerSearch}
      />
      <button onClick={clearSearch}>Clear</button>
    </form>
  )
}

export default Searcher