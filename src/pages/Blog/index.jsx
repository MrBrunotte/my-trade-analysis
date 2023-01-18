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
          <h4 className='myh4 myYellow'>{blog.trade1Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade1}</h5>
          <p className='tradeText trade1'>{blog.trade1}</p>
          <h4 className='myh4 myYellow'>{blog.trade2Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade2}</h5>
          <p className='tradeText trade2'>{blog.trade2}</p>
          <h4 className='myh4 myYellow'>{blog.trade3Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade3}</h5>
          <p className='tradeText trade3'>{blog.trade3}</p>
          <h4 className='myh4 myYellow'>{blog.trade4Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade4}</h5>
          <p className='tradeText trade4'>{blog.trade4}</p>
          <h4 className='myh4 myYellow'>{blog.trade5Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade5}</h5>
          <p className='tradeText trade5'>{blog.trade5}</p>
          <h4 className='myh4 myYellow'>{blog.trade6Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade6}</h5>
          <p className='tradeText trade6'>{blog.trade6}</p>
          <h4 className='myh4 myYellow'>{blog.trade7Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade7}</h5>
          <p className='tradeText trade7'>{blog.trade7}</p>
          <h4 className='myh4 myYellow'>{blog.trade8Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade8}</h5>
          <p className='tradeText trade8'>{blog.trade8}</p>
          <h4 className='myh4 myYellow'>{blog.trade9Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade9}</h5>
          <p className='tradeText trade9'>{blog.trade9}</p>
          <h4 className='myh4 myYellow'>{blog.trade10Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade10}</h5>
          <p className='tradeText trade10'>{blog.trade10}</p>
          <h4 className='myh4 myYellow'>{blog.trade11Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade11}</h5>
          <p className='tradeText trade11'>{blog.trade11}</p>
          <h4 className='myh4 myYellow'>{blog.trade12Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade12}</h5>
          <p className='tradeText trade12'>{blog.trade12}</p>
          <h4 className='myh4 myYellow'>{blog.trade13Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade13}</h5>
          <p className='tradeText trade13'>{blog.trade13}</p>
          <h4 className='myh4 myYellow'>{blog.trade14Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade14}</h5>
          <p className='tradeText trade14'>{blog.trade14}</p>
          <h4 className='myh4 myYellow'>{blog.trade15Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade15}</h5>
          <p className='tradeText trade15'>{blog.trade15}</p>
          <h4 className='myh4 myYellow'>{blog.trade16Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade16}</h5>
          <p className='tradeText trade16'>{blog.trade16}</p>
          <h4 className='myh4 myYellow'>{blog.trade17Header}</h4>
          <h5 className='myh5 reasonToTakeTrade'>{blog.reasonToTakeTrade17}</h5>
          <p className='tradeText trade17'>{blog.trade17}</p>
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

