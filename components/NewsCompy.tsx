const NewsCompy = ({ article }: any) => {
    return (
      <div className={`bg-white flex rounded-lg shadow-lg ml-20 max-auto mr-20 max-h-[420px]`}>
        <div className="max-w-[450px] max-h-[350px] min-h-[350px] p-5">
  <img
    className="object-cover h-full"
    src={article.urlToImage}
    alt=""
  />
</div>

  
        <div className=" relative px-4 py-4">
          <a href={article.url} target="_blank">
            <h3 className="font-semibold text-2xl mb-2 hover:text-blue-500">
             
              <span className="text-slate-800"></span>
              {article.title}
            </h3>
          </a>
          <p className="text-gray-600 text-[12px] italic font-serif mb-2">
            {article.description}
          </p>
  
          <p className="text-gray-900 text-base font-bold mb-2">
            Author: {article.author}
          </p>
  
          <p className="text-gray-400 font-semibold text-base">
            Published At: {article.publishedAt}
          </p>
          <p className={`text-gray-500 text-base font-semibold leading-relaxed mt-2 `}>
            {article.content}
          </p>
          <a href={article.url} target="_blank" className="mt-10" >
             <div   className="bg-gray-800 hover:bg-slate-300 hover:text-gray-900 absolute bottom-5 mt-5 text-gray-100 py-2 px-3 rounded-lg border border-gray-900" >
             <p>read more at Newssy...</p>
                </div> 
          </a>
          


        </div>
      </div>
    );
  };
  
  export default NewsCompy;
  