import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
  return (
    <div className={classes.loader}>
      <h1>Loading</h1>
      <div className={classes.ldsEllipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader