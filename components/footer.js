/* eslint-disable react/jsx-one-expression-per-line */
import Hyperlink from './Hyperlink';

const Footer = () => {
  const date = new Date();
  return (
    <footer
      id="footer"
      className="relative flex flex-col content-center justify-center flex-grow overflow-y-hidden bg-sunflower pattern-circuitry py-20 px-12"
    >
      <div className="text-center text-gray-700">
        <h1 className="mb-3 text-xl font-semibold leading-tight tracking-tighter">
          Have a nice
          {' '}
          {date.toLocaleString('en', { weekday: 'long' })}
          {' '}
          😉
        </h1>
        <p className="tracking-tight">
          <span className="font-semibold">&copy; 2020 Nourman Hajar</span>
          {'  '}—{'  '}Powered by{' '}
          <Hyperlink target="_blank" rel="nofollow" href="https://vercel.com/">Vercel</Hyperlink>
          {' '}and{' '}
          <Hyperlink target="_blank" rel="nofollow" href="https://notion.so/">Notion</Hyperlink>
        </p>
        <p className="tracking-tight">
          Patterns and icons by{' '}
          <Hyperlink target="_blank" rel="nofollow" href="https://www.heropatterns.com/">
            Hero Patterns
          </Hyperlink>
          {' '}and{' '}
          <Hyperlink target="_blank" rel="nofollow" href="https://heroicons.dev/">
            Heroicons
          </Hyperlink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
