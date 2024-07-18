import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import './NewsBoard.css';
import Loader from './Loader'; // Import the Loader component

const NewsBoard = ({ category, newsType }) => {
  const [article, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=83149137643f4d1f8909ff3ca389ccff`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        // Ensure the loader shows for at least 3 seconds
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }
    };

    fetchData(); // Fetch data when component mounts

  }, [category]);

  return (
    <div className='main'>
      {loading ? (
        <div className="loader-container">
          <h2 className='heading text-center'>
            Welcome to News Board
          </h2>
          <Loader /> {/* Display loader while fetching data */}
        </div>
      ) : (
        <>
          <h2 className='heading text-center'>
            {newsType} <span className='badge'>News</span>
          </h2>
          <div className='news-items'>
            {article.map((news, index) => (
              <NewsItem key={index} title={news.title} description={news.description} url={news.url} src={news.urlToImage} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default NewsBoard;
