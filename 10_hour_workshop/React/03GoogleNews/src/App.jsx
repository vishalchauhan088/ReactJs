import React from 'react';
import useNews from './Hooks/useNews';
import NewsCard from './Components/NewsCard'
import InputBox from './Components/InputBox'

function NewsList() {
  const { newsData, loading, error } = useNews('us');

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  console.log(newsData)

  return (
    <>

      <div className="main m-10">
            <div className="filter">
                <InputBox />
                
            </div>
            <div className="flex-box flex-row">
              {
                newsData.map((each, index) => (
                  <NewsCard key={index} obj={each} />
                ))
              }
          </div>
      </div>


    </>
    
  );
}

export default NewsList;
