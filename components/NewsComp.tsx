const NewsComp = ({ article }: any) => {
  return (
    <div className="rounded overflow-hidden shadow-lg mx-auto sm:py-10 max-w-sm h-[800px]">
      <img
        className="w-full max-h-64 overflow-hidden"
        src={article.urlToImage}
        alt=""
      />
      <div className="px-4 py-4 ">
        <a href={article.url} target="_blank">
          <h3 className="font-bold text-xl mb-2 hover:text-blue-500">
            <p className="underline text-gray-500 ">
              More News??? <span className="text-green-500">Click Here...</span>
            </p>{" "}
            <span className="text-slate-800"></span>
            {article.title}
          </h3>
        </a>
        <p className="text-gray-600 text-base italic mb-2">
          {article.description}
        </p>
        <p className="text-gray-700 text-base font-semibold mb-2">
          Author: {article.author}
        </p>
        <p className="text-gray-700 text-base">
          Published At: {article.publishedAt}
        </p>
        <p className="text-gray-700 text-base leading-relaxed mt-2">
          {article.content}
        </p>
      </div>
    </div>
  );
};

export default NewsComp;
