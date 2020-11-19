import Link from 'next/link';

const Hyperlink = (props) => {
  const {
    children,
    rel,
    className,
    href,
    ...otherProps
  } = props;
  return (
    <Link href={href}>
      <a
        className={`link-element ${className || ''}`}
        rel={`noreferrer noopener ${rel || ''}`}
        {...otherProps}
      >
        {children}
      </a>
    </Link>
  );
};

export default Hyperlink;
