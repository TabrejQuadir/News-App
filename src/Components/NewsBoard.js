import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import './NewsBoard.css';
import Loader from './Loader';

const NewsBoard = ({ category, newsType }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for category:', category);
        const startTime = Date.now();

        // Remove section parameter test
        const apiParams = {
          method: 'GET',
          url: 'https://real-time-news-data.p.rapidapi.com/topic-news-by-section',
          params: {
            topic: category.toUpperCase(),
            // section: 'CAQiSkNCQVNNUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENJT0NBUWFDZ29JTDIwdk1ETnliSFFxQ2hJSUwyMHZNRE55YkhRb0FBKi4IACoqCAoiJENCQVNGUW9JTDIwdk1EZGpNWFlTQldWdUxVZENHZ0pKVENnQVABUAE', //Remove section
            country: 'US',
            lang: 'en',
            limit: '500',
            timestamp: Date.now() //Add timestamp for cache busting.
          },
          headers: {
            'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com',
            'x-rapidapi-key': 'a666b7cf08msh3c7694558a2caadp1e8ff6jsn236101812c90',
          },
        };

        const response = await axios(apiParams);

        console.log('Full API Response for', category, ':', response.data); //log full response
        console.log('API Response data section for', category, ':', response.data.data); //log data section

        // Ensure loader shows for at least 1 second
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 1000) {
          await new Promise(resolve => setTimeout(resolve, 1000 - elapsedTime));
        }

        if (response.data && response.data.data) {
          setArticles(response?.data?.data);
        } else {
          console.warn('No data returned for category:', category);
          setArticles([]);
        }

        setLoading(false);
        console.log('Loading state set to false');
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Failed to fetch news data. Please try again later.');
        setLoading(false);
      }
    };

    console.log('Loading state set to true');
    setLoading(true);
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <div className="main loader-background">
        <h2 className="heading text-center">Loading {newsType} News</h2>
        <p className="text-center text-light">Please wait while we fetch the latest stories...</p>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2 className="heading text-center">{error}</h2>
      </div>
    );
  }

  return (
    <div className="main">
      <h2 className="heading text-center">
        {newsType} <span className="badge">News</span>
      </h2>
      <div className="news-items">
        {articles?.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title || 'Untitled'}
            description={news.snippet || 'No description available'} //Use snippet as description.
            url={news.link} //Use link as url
            src={news.photo_url || 'https://via.placeholder.com/150'} //Use photo_url.
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;