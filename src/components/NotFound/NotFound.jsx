import React from 'react'
import './NotFound.css'

// Taking the title and warning as a prop and render the block
// Passing the values as props so that the same component can be used to show loading
const NotFound = (props) => {
  return (
    <>
      <div className='notFoundContainer'>
        <h1 className='notFoundTitle'>{props.title}</h1>
      </div>
      <p className='notFoundSubtitle'>{props.warning}</p>
    </>
  )
}

export default NotFound
