import Link from 'next/link';

const ArticleSummary = ({
  key, slug, image, title, summary, category, small, pageIcon, isWork,
}) => (
  <Link
    key={key}
    href={`/${isWork ? 'works' : 'articles'}/${slug}`}
  >
    <a
      key={key}
      className="flex flex-col w-full overflow-hidden transition-all duration-200 ease-in-out transform bg-gray-100 shadow-2xl rounded-xl hover:scale-110"
    >
      <article
        className={`relative flex w-full overflow-hidden pb-2/3 h-48 ${!small && 'md:h-64'}`}
        style={{
          background: `url(${image}) no-repeat center center`,
          backgroundSize: 'cover',
        }}
      />
      <div className="flex flex-col justify-between flex-1 p-2">
        <div className="p-4 pb-0">
          <h2 className="text-xl mb-2 font-bold leading-snug">
            {title}
          </h2>
          <div>
            {summary}
          </div>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex flex-wrap items-center space-x-3">
            <span className="mr-1">{pageIcon}</span>
            {Array.isArray(category) ? category.map((item) => (
              <span
                className="px-2 py-0 text-sm font-bold text-gray-800 uppercase rounded-md bg-gradient-to-t from-yellow-300 to-yellow-200"
              >
                {item}
              </span>
            )) : (
              <span
                className="px-1 py-0 text-sm font-bold text-gray-800 uppercase rounded-md bg-gradient-to-t from-yellow-300 to-yellow-200"
              >
                {category}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  </Link>
);

export default ArticleSummary;
