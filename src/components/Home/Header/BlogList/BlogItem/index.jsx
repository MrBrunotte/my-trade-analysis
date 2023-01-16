import React from 'react';
import { Link } from 'react-router-dom';
import './styleBlogItem.css';
import Chip from '../../../../common/Chip'

const BlogItem = ({blog:{
  id, 
  tradeDescription,
  title, 
  tradingDate, 
  authorName, 
  authorAvatar, 
  category,
  instrumentCoverImage, }
}) => (
    <div className='blogItem-wrapper'>
      <img className='blogItem-cover' src={instrumentCoverImage} alt="Full session pic" />
      <Chip label={category} />
      <Link className='' to={`/blog/${id}`}>
      <h3 className='myh3'>{title}<span> &#8594;</span></h3>
      <p className='blogItem-description'>{tradeDescription}</p>
      </Link>

      <footer>
        <Link className='blogItem-link' to={`/blog/${id}`}>
        <div className='blogItem-author'>
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6 className='myh6 avatarTraderName'>{authorName}</h6>
            <p>{tradingDate}</p>
          </div>
        </div>
       
        </Link></footer>
    </div>
  );

export default BlogItem
