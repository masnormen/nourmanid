import Link from 'next/link';

const Hyperlink = (props) => {
  const {
    children,
    rel,
    className,
    href,
    ...otherProps
  } = props;
  // if (/^(https?:\/\/|\/\/)/i.test(href)) {
  //   return (
  //     <a
  //       className={`link-element ${className || ''}`}
  //       rel={`noreferrer noopener ${rel || ''}`}
  //       href={href}
  //       {...otherProps}
  //     >
  //       {children}
  //     </a>
  //   );
  // }
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
