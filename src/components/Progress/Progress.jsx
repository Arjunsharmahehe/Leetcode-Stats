import React from 'react'
import ProgressBar from './ProgressBar/ProgressBar.jsx'
import './Progress.css'
 
const Progress = ({data}) => {

  // Extracting the needed key-value pairs from the object
  const { totalSolved, totalQuestions, easySolved, totalEasy, mediumSolved, totalMedium, hardSolved, totalHard} = data;
  
  // Calculating the percentage questions solved
  const totalPercentage = (totalSolved/totalQuestions).toFixed(2);
  const easyPercentage = (easySolved/totalEasy).toFixed(2);
  const mediumPercentage = (mediumSolved/totalMedium).toFixed(2);
  const hardPercentage = (hardSolved/totalHard).toFixed(2);

  return (
    <div className='progress'>
      <ProgressBar title='Total' percentage={totalPercentage}/>
      <ProgressBar title='Easy' percentage={easyPercentage}/>
      <ProgressBar title='Mid' percentage={mediumPercentage}/>
      <ProgressBar title='Hard' percentage={hardPercentage}/>
    </div>
  )
}

export default Progress
