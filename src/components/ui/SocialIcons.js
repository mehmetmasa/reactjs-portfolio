import React from 'react';

function SocialIcons({
  links = [], // Expect an array of social link objects
  variant = 'default',
  size = 'md',
  className = ''
}) {
  
  // Size variations
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };
  
  // Style variations
  const variants = {
    default: "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-blue-600/90 border border-gray-700/50",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50",
    light: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/10",
    solid: "bg-blue-600 text-white hover:bg-blue-700"
  };
  
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {links.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizes[size]} ${variants[variant]} rounded-full flex items-center justify-center transition-all duration-300`}
          aria-label={social.name}
        >
          <div className="w-1/2 h-1/2">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
