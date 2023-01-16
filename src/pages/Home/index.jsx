import React, { useState } from 'react'
import EmptyList from '../../components/common/Chip/EmptyList';
import Header from '../../components/Home/Header';
import BlogList from '../../components/Home/Header/BlogList';
import SearchBar from '../../components/Home/Header/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit function
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults()
  };

  // search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog => 
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );

      setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  };


  return (
    <div>
      {/* Page header */}
      <Header />
      {/* Search bar */}
      <SearchBar value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit} 
        handleSearchKey={e => setSearchKey(e.target.value)}/>
      {/* Blog list & Empty list */}
      {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/>}
    </div>
  );
};

export default Home
