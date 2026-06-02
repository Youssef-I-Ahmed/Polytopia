import { Link } from 'react-router-dom';
import Style from './Button.module.css';

const Button = ({
  children,
  to,
  href,
  type = 'button',
  onClick,
  className = '',
  target,
  download,
}) => {
  const buttonClassName = `${Style.button} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={buttonClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClassName} target={target} onClick={onClick} download={download} rel={target === '_blank' ? 'noreferrer' : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
