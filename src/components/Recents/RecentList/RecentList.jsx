import React from 'react'
import './RecentList.css'

// Component for a single list element
const RecentList = ({submission}, key) => {

  // Checking if the submission is accepted or not
  // This will be used as class to asign different color to the text wrt to the submission's state
  const colour = submission.statusDisplay==='Accepted'? 'green' : 'red';

  return (
    <div className='listElement' key={key}>
        <h3 className='title'>{submission.title}</h3>
        <div className='statusAndLanguage'>
          <h3 className={`status ${colour}`}>{submission.statusDisplay}</h3>
          <p className='language'>{submission.lang}</p>
        </div>
    </div>
  )
}

export default RecentList
