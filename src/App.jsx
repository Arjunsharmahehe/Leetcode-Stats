// importing components
import React, { useState } from 'react'
import data, { dailyProblem } from './data.jsx'
import Recent from './components/Recents/Recent.jsx'
import Progress from './components/Progress/Progress.jsx'
import Solved from './components/Solved/Solved.jsx'
import NotFound from './components/NotFound/NotFound.jsx'
import TheDailyProblem from './components/DailyProblem/DailyProblem.jsx'
import './App.css'


function App() {

  // Setting up states for loading and different data to be collected
  const [Loading, setLoading] = useState(false);
  const [Data, setData] = useState(data);
  const [DailyProblem, setDailyProblem] = useState(dailyProblem);

  // Handles the API fetch requests on submition of the username
  const onSubmitHandler = async (event) => {
    event.preventDefault()

    // Setting the loading to be true, so as to show the loading tag
    setLoading(true);

    // Fetching the user profile details
    const username = event.target.elements.username.value;
    const response = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/${username}`);
    const jsonData = await response.json();
    setData(jsonData);

    // Fetching the leetcode daily question
    const problemData = await fetch(`https://alfa-leetcode-api.onrender.com/daily`);
    const jsonDailyProblem = await problemData.json();
    setDailyProblem(jsonDailyProblem);

    // Setting the loading to be false as all the API calls have been completed
    setLoading(false);

  }

  // return(
  //   <>
  //     <TestComponent/>
  //   </>
  // );

  // If the site is loading, it will render the code block below
  if(Loading){
    return(
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <input type='text' placeholder='Username' name='username'></input>
          <button type='submit'>Search</button>
        </form>
        <NotFound title='Loading...' warning=''/>
      </div>
    );
  }

  else{

    // Else it will check is the user exists, if the user does then display the infogrphics.
    // If the user doesn't exist, the API returns an empty object '{}' 
    if(Data.totalQuestions){
    return (<div className='container'>
              <form onSubmit={onSubmitHandler}>
                <input type='text' placeholder='Username' name='username'></input>
                <button type='submit'>Search</button>
              </form>
              <div className='row'>
                <Solved data={Data}/>
                <Progress data={Data}/>
                <TheDailyProblem dailyProblem={DailyProblem}/>
              </div>
              <div className='row'>
                <Recent data={Data}/>
              </div>
            </div>);
  }
  
  // Render this block if the user doesn't exist
  else{
    return(
      <div className='container'>
        <form onSubmit={onSubmitHandler}>
          <input type='text' placeholder='Username' name='username'></input>
          <button type='submit'>Search</button>
        </form>
        <NotFound title='User not found' warning='Enter a valid username'/>
      </div>
    );
  }
}
    

}

export default App
