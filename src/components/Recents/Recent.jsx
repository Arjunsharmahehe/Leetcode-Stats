import React from 'react'
import RecentList from './RecentList/RecentList.jsx';
import './Recent.css'

const Recent = ({data}) => {

  // Extracting the value of the key named 'recentSubmissions' from the object
  const { recentSubmissions } = data;

  // Using map to return a dynamically generated list using the index as key
  return (
    <div className='recentContainer'>
      <h1 className='recentTitle'>Recent Solutions</h1>
        {recentSubmissions.map((submission, i) => 
        <RecentList submission={submission} key={i}/>
        )}
    </div>
  );
}

export default Recent
