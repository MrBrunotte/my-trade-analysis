import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import EmptyList from '../../components/common/Chip/EmptyList';
import { blogList } from '../../config/data';
import Chip from '../../components/common/Chip';
import './stylesBlog.css';

const Blog = () => {
  const {id} = useParams();
  const [blog, setBlog] = useState(null)

  useEffect(() => {
   let blog = blogList.find(blog => blog.id === parseInt(id));

    if(blog) {
      setBlog(blog);
    }

  }, [id])

  return (
    <>
      <Link className='blog-goBack center' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrapper'>
          <header>
            <p className='tradingDate'>Trading date: {blog.tradingDate}</p>
            <h1 className='individualBlogH1'>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.instrumentCoverImage} alt='cover' />
          <div className='center'>
          <h1 className='myh1'>Trade summary</h1>
            <ul>
              <li className='myListItem numOfTrades'>{blog.numOfTrades}</li>
              <li className='myListItem totalPoints'>{blog.totalPoints}</li>
              <li className='myListItem totalTicks'>{blog.totalTicks}</li>
              <li className='myListItem winners'>{blog.winners}</li>
              <li className='myListItem losers'>{blog.losers}</li>
              <li className='myListItem breakEven'>{blog.breakEven}</li>
              <li className='myListItem NumOfTarget'>{blog.NumOfTarget}</li>
            </ul>
          </div>
          <br></br>
          <p className='summary'>{blog.summary}</p>
          <p className='blog-description tradeText trade1'>{blog.trade1}</p>
          <p className='blog-description tradeText trade2'>{blog.trade2}</p>
          <p className='blog-description tradeText trade3'>{blog.trade3}</p>
          <p className='blog-description tradeText trade4'>{blog.trade4}</p>
          <p className='blog-description tradeText trade5'>{blog.trade5}</p>
          <p className='blog-description tradeText trade6'>{blog.trade6}</p>
          <p className='blog-description tradeText trade7'>{blog.trade7}</p>
          <p className='blog-description tradeText trade8'>{blog.trade8}</p>
          <p className='blog-description tradeText trade9'>{blog.trade9}</p>
          <p className='blog-description tradeText trade10'>{blog.trade10}</p>
          <p className='blog-description tradeText trade11'>{blog.trade11}</p>
          <p className='blog-description tradeText trade12'>{blog.trade12}</p>
          <p className='blog-description tradeText trade13'>{blog.trade13}</p>
          <p className='blog-description tradeText trade14'>{blog.trade14}</p>
          <p className='blog-description tradeText trade15'>{blog.trade15}</p>
          <p className='blog-description tradeText trade16'>{blog.trade16}</p>
          <p className='blog-description tradeText trade17'>{blog.trade17}</p>
          <Link className='blog-goBack center' to='/'>
            <span> &#8592;</span> <span>Go Back</span>
          </Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog

