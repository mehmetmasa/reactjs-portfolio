import React from 'react';
import { Link } from 'react-router-dom';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  download = false,
  target,
  rel,
  ...props
}) {
  // Common classes
  const baseClasses = "inline-flex items-center font-medium rounded-lg transition-all duration-300";

  // Size variations
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base"
  };

  // Variant styles
  const variantClasses = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-blue-700/30 hover:from-blue-500 hover:to-blue-700",
    secondary: "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white hover:bg-gray-700/50 shadow-lg",
    outline: "border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50 backdrop-blur-sm"
  };

  // Generate classes based on props
  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    className
  ].join(' ');

  // Conditional rendering based on presence of href
  if (href) {
    // External link, anchor link or file download
    if (href.startsWith('http') || href.startsWith('/files') || href.startsWith('#') || download) {
      return (
        <a
          href={href}
          className={classes}
          target={target || (href.startsWith('http') ? '_blank' : undefined)}
          rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
          download={download}
          {...props}
        >
          {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
          {children}
          {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
        </a>
      );
    }

    // Internal link using React Router
    return (
      <Link
        to={href}
        className={classes}
        {...props}
      >
        {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
        {children}
        {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
      </Link>
    );
  }

  // Button element for onClick functionality
  return (
    <button
      className={classes}
      onClick={onClick}
      type={props.type || 'button'}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
      {children}
      {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
}

export default Button;