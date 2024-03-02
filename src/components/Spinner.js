// import React, { Component } from 'react'
import React from 'react'
import loading from './Settings.gif'

const Spinner = () => {
    return (
      <div className='text-center align-middle'>
        <img src={loading} alt="loading" />
      </div>
    )
  }

  export default Spinner