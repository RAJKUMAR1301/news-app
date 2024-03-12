const NewsComp = ({ article }: any) => {
  return (
    <div className={`bg-white relative rounded overflow-hidden shadow-lg mx-auto sm:py-2 max-w-sm h-[800px]  `}>
      <div className="p-3">
        <img
          className="w-full max-h-64 overflow-hidden"
          src={article.urlToImage}
          alt=""
        />
      </div>

      <div className="  px-4 py-4  ">
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
        <a href={article.url} target="_blank"  >
             <div   className="bg-gray-800   hover:bg-slate-300 hover:text-gray-900 absolute bottom-4 mt-5 text-gray-100 py-2 px-3 rounded-lg border border-gray-900" >
             <p>read more at Newssy...</p>
                </div> 
          </a>
      </div>
    </div>
  );
};

export default NewsComp;
