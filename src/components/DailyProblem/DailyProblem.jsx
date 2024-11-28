import React from 'react'
import './DailyProblem.css'

// Taking the object as a prop and rendering the data
const TheDailyProblem = ({dailyProblem}) => {

  // Triming the Title if it's to long so it doesn't ruin the alignment
  const length = dailyProblem.questionTitle.length;
  const title = length > 20 ? dailyProblem.questionTitle.slice(0,20)+'...' : dailyProblem.questionTitle;

  return (
    <div className='dailyContainer'>
      <div className='dailyProblem'>
        <p className='questionNumber'>{dailyProblem.questionId}</p>
        <h2>{title}</h2>
        <p className='likesAndDiff'>
          <span className='likes'>{dailyProblem.likes} Likes</span><span className={`diff ${dailyProblem.difficulty}x`}>{dailyProblem.difficulty}</span>
        </p>
      </div>
      <button onClick={() => window.open(dailyProblem.questionLink)}>Attempt</button>
    </div>
  );
}

export default TheDailyProblem
