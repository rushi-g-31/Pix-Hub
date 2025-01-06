import React from 'react'
import spinner from '../spinner.gif'
const Loader = () => {
  return (
    <>
      <div className="imgLoader">
        <img src={spinner} alt="loader" />
      </div>
    </>
  )
}

export default Loader
