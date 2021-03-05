import Hyperlink from './Hyperlink';

const Navbar = () => (
  <nav
    id="header"
    className="flex flex-grow bg-coffeetint pattern-woody py-5 px-16"
  >
    <div className="flex flex-col md:flex-row justify-center text-xl md:text-base md:justify-between content-center w-full max-w-5xl space-x-2 space-y-2 md:space-y-0 m-auto">
      <div className="flex justify-center">
        <Hyperlink
          href="/"
        >
          <svg
            className="w-6 h-6 inline-block -mt-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          {' '}
          Nourman Hajar
        </Hyperlink>
      </div>
      <div className="flex flex-row flex-wrap justify-center space-x-4 md:space-x-6">
        <Hyperlink href="/">Home</Hyperlink>
        <Hyperlink href="/works">Works</Hyperlink>
        <Hyperlink href="/articles">Articles</Hyperlink>
        {/*<Hyperlink href="/contact">Contact 🤙</Hyperlink>*/}
      </div>
    </div>
  </nav>
);

export default Navbar;
