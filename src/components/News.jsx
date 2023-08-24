import React, { useState, useEffect } from 'react';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Fetch news data from the API using the provided API key
    const fetchNewsData = async () => {
      try {
        const apiKey = '75435be281c84c1fb5759e99a35c393c'; // Replace with your actual API key
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        if (response.ok) {
          const data = await response.json();
          setNewsData(data.articles.slice(0, 3)); // Display only the first 3 news articles
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='text-black text-4xl font-bold text-center pb-8'>Latest News</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {newsData.map((news) => (
          <div key={news.url} className='flex flex-col justify-center items-center px-4 relative'>
            <img
              className='w-48 h-48 object-cover rounded-lg mb-4'
              src={news.urlToImage}
              alt={news.title}
            />
            <div className='absolute inset-0 bg-[rgba(0,0,0,0.5)] opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center rounded-lg'>
              <h2 className='text-[#ffffff] font-bold text-center'>{news.title}</h2>
            </div>
            <p className='text-center'>{news.description}</p>
            <a className='text-[#00df9a] font-medium' href={news.url} target='_blank' rel='noopener noreferrer'>
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
