import React from 'react'
import classes from './Pagination.module.css'

const Pagination = ({page, setPage}) => {

  const nextPage = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const prevPage = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  const firstPage = (e) => {
    e.preventDefault()
    setPage(1)
  }

  const lastPage = (e) => {
    e.preventDefault()
    setPage(22)
  }

  return (
    <>
    <div className={classes.paginationContainer}>
        {(page === 1)
          ?
          <button onClick={() => alert(`It's first page`)}>First page</button>
          :
          <button onClick={firstPage}>First page</button>
        }
        {(page === 1)
          ?
          <button disabled>...</button>
          :
          <button onClick={prevPage}>prev</button>
        }
        <div className={classes.page}>{page}</div>
        {(page === 22)
          ?
          <button disabled>...</button>
          :
          <button onClick={nextPage}>next</button>
        }
        {(page === 22)
          ?
          <button onClick={() => alert(`It's last page`)}>Last page</button>
          :
          <button onClick={lastPage}>Last page</button>
        }
    </div>
    </>
  )
}

export default Pagination