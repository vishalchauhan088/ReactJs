function NewsCard({ obj }) {
    return (
      <div className="flex flex-col m-10 md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <a href="#" className="flex flex-col md:flex-row justify-between p-5 leading-normal w-full">
          <img className="object-cover w-full h-64 md:h-96 md:w-48 md:rounded-l-lg md:rounded-t-none md:rounded-tl-lg" src={obj.urlToImage} alt="" />
          <div className="md:w-3/4 md:p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.description}</p>
          </div>
        </a>
      </div>
    );
  }
  
  export default NewsCard;
  