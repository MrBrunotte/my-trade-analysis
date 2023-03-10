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
        <span> &#8592; Home</span>
      </Link>
      {blog ? (
        <div className='blog-wrapper'>
          <header>
            <h4 className='tradingDate myh4'>Trading date: {blog.tradingDate}</h4>
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

          <h1 className='myh1'>Trade summary</h1>
          <p className='myh4 summary'>{blog.summary}</p>
          <p className='myh4 significantLesson'>{blog.significantLesson}</p>
          <div className='tradeStats'>
          <hr></hr>
            <div className='myListItem numOfTrades'>{blog.numOfTrades}</div>
            <div className='myListItem totalPoints'>{blog.totalPoints}</div>
            <div className='myListItem totalTicks'>{blog.totalTicks}</div>
            <div className='myListItem totalPips'>{blog.totalPips}</div>
            <div className='myListItem winners'>{blog.winners}</div>
            <div className='myListItem losers'>{blog.losers}</div>
            <div className='myListItem breakEven'>{blog.breakEven}</div>
            <div className='myListItem NumOfTarget'>{blog.NumOfTarget}</div>
            <hr></hr>
          </div>

          <h2 className='myh2 individualTA'>Session analysis</h2>
          <h4 className='myh4 myYellow'>{blog.trade1Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade1}</h5>
          <p className='tradeText trade1'>{blog.trade1}</p>
          <p className='tradeText'>{blog.riskManagement1}</p>
          <h4 className='myh4 myYellow'>{blog.trade2Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade2}</h5>
          <p className='tradeText'>{blog.trade2}</p>
          <p className='tradeText'>{blog.riskManagement2}</p>
          <h4 className='myh4 myYellow'>{blog.trade3Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade3}</h5>
          <p className='tradeText'>{blog.trade3}</p>
          <p className='tradeText'>{blog.riskManagement3}</p>
          <h4 className='myh4 myYellow'>{blog.trade4Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade4}</h5>
          <p className='tradeText'>{blog.trade4}</p>
          <p className='tradeText'>{blog.riskManagement4}</p>
          <h4 className='myh4 myYellow'>{blog.trade5Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade5}</h5>
          <p className='tradeText'>{blog.trade5}</p>
          <p className='tradeText'>{blog.riskManagement5}</p>
          <h4 className='myh4 myYellow'>{blog.trade6Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade6}</h5>
          <p className='tradeText'>{blog.trade6}</p>
          <p className='tradeText'>{blog.riskManagement6}</p>
          <h4 className='myh4 myYellow'>{blog.trade7Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade7}</h5>
          <p className='tradeText'>{blog.trade7}</p>
          <p className='tradeText'>{blog.riskManagement7}</p>
          <h4 className='myh4 myYellow'>{blog.trade8Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade8}</h5>
          <p className='tradeText'>{blog.trade8}</p>
          <p className='tradeText'>{blog.riskManagement8}</p>
          <h4 className='myh4 myYellow'>{blog.trade9Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade9}</h5>
          <p className='tradeText'>{blog.trade9}</p>
          <p className='tradeText'>{blog.riskManagement9}</p>
          <h4 className='myh4 myYellow'>{blog.trade10Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade10}</h5>
          <p className='tradeText'>{blog.trade10}</p>
          <p className='tradeText'>{blog.riskManagement10}</p>
        
          <Link className='blog-goBack center' to='/'>
            <span> &#8592; Home</span>
          </Link>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog

