import React from 'react';
import BlogItem from './BlogItem';
import './styleBlogList.css';

const BlogList = ({blogs}) => (
    <div className='blogList-wrapper'>
      {blogs.map((blog)=>(
        <BlogItem blog={blog} key={blog.id}/>
        ))}
    </div>
  );

export default BlogList
