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
  // summary,
  // trade1,
  // trade2,
  // trade3,
  // trade4,
  // trade5,
  // trade6,
  // trade7,
  // trade8,
  // trade9,
  // trade10,
  // trade11,
  // trade12,
  // trade13,
  // trade14,
  // trade15,
  // trade16,
  // trade17,
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
      <h5>Read more<span> &#8594;</span></h5>
      {/*<h4 className='myh6'>{summary}</h4>
       <p className='blog-description'>{trade1}</p>
      <p className='blog-description'>{trade2}</p>
      <p className='blog-description'>{trade3}</p>
      <p className='blog-description'>{trade4}</p>
      <p className='blog-description'>{trade5}</p>
      <p className='blog-description'>{trade6}</p>
      <p className='blog-description'>{trade7}</p>
      <p className='blog-description'>{trade8}</p>
      <p className='blog-description'>{trade9}</p> */}
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
