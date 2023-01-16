import React from 'react';
import { Link } from 'react-router-dom';
import './styleEmptyList.css';

const EmptyList
 = () => {
  return (
    <div className='emptyList-wrapper'>
      {/* <img src='/assets/images/13525-empty(2).gif' alt='Empty gif' /> */}
      <h2 className='myh2'>I'm sorry... </h2>
      <br></br>
      <p>The blog you are trying to reach does not exist!</p>
      <Link className='blog-goBack' to='/'>
        <span>Go Back</span>
      </Link>
    </div>
  )
}

export default EmptyList

