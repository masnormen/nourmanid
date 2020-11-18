const ArticleSummary = ({
  key, slug, image, title, summary, category, small, pageIcon, isWork,
}) => (
  <a
    key={key}
    href={`/${isWork ? 'works' : 'articles'}/${slug}`}
    className="flex flex-col w-full overflow-hidden transition-transform duration-200 ease-in-out transform bg-gray-200 shadow-md rounded-xl hover:border-gray-400 hover:-translate-y-2 hover:shadow-lg"
  >
    <article
      className={`relative flex w-full overflow-hidden pb-2/3 ${small ? 'h-48' : 'h-64'}`}
      style={{
        background: `url(${image}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
    />
    <div className="flex flex-col justify-between flex-1 p-2">
      <div className="p-4 pb-0">
        <h2 className="text-xl mb-2 font-semibold leading-snug">
          {title}
        </h2>
        <div>
          {summary}
        </div>
      </div>
      <div className="flex justify-between p-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="mr-1">{pageIcon}</span>
          {Array.isArray(category) ? category.map((item) => (
            <span
              className="px-2 py-0 text-sm font-bold text-gray-800 uppercase rounded-md bg-sunflower"
            >
              {item}
            </span>
          )) : (
            <span
              className="px-1 py-0 text-sm font-bold text-gray-800 uppercase rounded-md bg-sunflower"
            >
              {category}
            </span>
          )}
        </div>
      </div>
    </div>
  </a>
);

export default ArticleSummary;
