import classNames from 'classnames';

export default function Button({ theme, href, className, children }) {
  let buttonClasses = classNames(theme, className);
  return (
    <a
      role="button"
      className={buttonClasses}
      href={href}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
