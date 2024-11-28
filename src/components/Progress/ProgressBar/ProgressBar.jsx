import React from 'react'
import './ProgressBar.css'

// Component for one block in the percentage solved block
const ProgressBar = ({title='Easy', percentage='20'}) => {
  return (
    <div className={`progressContainer ${title}`}>
      <h3 className='progressTitle'>{title}</h3>
      <p className='progressPercentage'>{percentage}%</p>     
    </div>
  )
}

export default ProgressBar
