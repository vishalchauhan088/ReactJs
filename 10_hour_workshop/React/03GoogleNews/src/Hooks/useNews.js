import { useState, useEffect } from 'react';

function useNews(country) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f65a07e1f43b4689a8c44e92afb4345b`);
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country]);

  return { newsData, loading, error };
}

export default useNews;
