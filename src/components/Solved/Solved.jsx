import React from 'react'
import './Solved.css'

const Solved = ({data}) => {

  // Extracting the required key-value pairs form the object
  const { totalSolved, totalQuestions, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard} = data;

  return (
    <div className='solvedContainer'>
      <p className='big'><span className='solvedTitle total'>Total:</span>{totalSolved}<span className='totalQuestions'>/{totalQuestions}</span></p>
      <p className='smol'><span className='solvedTitle easy'>Easy:</span>{easySolved}<span className='totalQuestions'>/{totalEasy}</span></p>
      <p className='smol'><span className='solvedTitle medium'>Medium:</span>{mediumSolved}<span className='totalQuestions'>/{totalMedium}</span></p>
      <p className='smol'><span className='solvedTitle hard'>Hard:</span>{hardSolved}<span className='totalQuestions'>/{totalHard}</span></p>
    </div>
  )
}

export default Solved
