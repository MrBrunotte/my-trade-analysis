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
          <p className='blog-description'>{blog.tradeDescription}</p>
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

