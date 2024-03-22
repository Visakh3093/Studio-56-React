import React from 'react'
import Logo from '../assets/images/logo5.svg'

const Loader = () => {
  return (
    <div className="loader-container">
    <div className="loader-inner" id="loaderContainer" tabIndex={0}>
      <img
        aria-label="page loading"
        className="loaderImage"
        height="150px"
        src={Logo}
        alt="Image issue"
      />
    </div>
  </div>
  )
}

export default Loader