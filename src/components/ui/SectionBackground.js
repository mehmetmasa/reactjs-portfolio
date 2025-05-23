import React from 'react';

function SectionBackground({
  className = '',
  variant = 'default',
  children,
  withGrid = true,
  withAnimatedBlobs = true,
  bgColor,
  ...props
}) {
  // Base classes
  const baseClasses = "relative overflow-hidden";

  // Background variants
  const variantClasses = {
    default: "bg-gray-900",
    gradient: "bg-gradient-to-b from-gray-900 to-gray-800",
    dark: "bg-gray-950"
  };

  // Generate classes
  const classes = [
    baseClasses,
    bgColor || variantClasses[variant],
    className
  ].join(' ');

  return (
    <div className={classes} {...props}>
      {/* Animated background elements */}
      {withAnimatedBlobs && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-400 rounded-full filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
      )}

      {/* Grid pattern overlay */}
      {withGrid && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiAwaDZ2LTZoLTZ2NnptLTYtNnYtNmgtNnY2aDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default SectionBackground;