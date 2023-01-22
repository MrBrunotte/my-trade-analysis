import React from 'react';
import { Link } from 'react-router-dom';
import './styleBlogItem.css';
import Chip from '../../../../common/Chip'

const BlogItem = ({blog:{
  id, 
  title, 
  tradingDate, 
  authorName, 
  authorAvatar, 
  category,
  instrumentCoverImage,
  tradeDescription,
 }
}) => (
    <div className='blogItem-wrapper'>
      <div className='titleSection'>
        <h3 className='myh3'>{title}</h3>
          <div className='hideChip'><Chip label={category} /></div>
      </div>
      <img className='blogItem-cover' src={instrumentCoverImage} alt="Full session pic" />
      <Link className='' to={`/blog/${id}`}>
      <h5 className='tradingDate myh5'>{tradingDate}</h5>
      <p className='blogItem-description'>{tradeDescription}</p>
      <h5 className='myh6 readMore'>Read more<span> &#8594;</span></h5>
      </Link>

      <footer>
        <Link className='blogItem-link' to={`/blog/${id}`}>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt="avatar" />
            <div>
              <h6 className='myh6 avatarTraderName'>{authorName}</h6>
              <p className='avatarTradingDate'>{tradingDate}</p>
            </div>
          </div>
          <hr className='myhr'></hr>
        </Link>
      </footer>
    </div>
  );

export default BlogItem
