import React from 'react';

function Card({ 
  children, 
  variant = 'default', 
  className = '', 
  backgroundImage, 
  overlay = false,
  ...props 
}) {
  // Base classes for all cards
  const baseClasses = "rounded-2xl border border-gray-700/50 shadow-xl";
  
  // Variant styles
  const variantClasses = {
    default: "bg-gray-800/50 backdrop-blur-sm p-8",
    gradient: "bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-8",
    dark: "bg-gray-900/80 backdrop-blur-sm p-8",
    transparent: "backdrop-blur-sm p-8"
  };
  
  // Generate classes based on props
  const classes = [
    baseClasses,
    variantClasses[variant],
    className
  ].join(' ');
  
  // If a background image is provided, use a relative container
  if (backgroundImage) {
    return (
      <div className={`relative h-full overflow-hidden ${baseClasses}`} {...props}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover object-center"
          />
          {overlay && <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-gray-900/90"></div>}
        </div>
        
        {/* Content with z-index to appear above the background */}
        <div className={`relative z-10 p-8 h-full ${className}`}>
          {children}
        </div>
      </div>
    );
  }
  
  // Standard card without background image
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

// Specialized info card component for personal info items
export function InfoCard({ icon, label, value, className = '' }) {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-center ${className}`}>
      <div className="bg-blue-600/20 rounded-full p-3 text-blue-400 mr-4">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-xs">{label}</p>
        <p className="text-white text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

// TimelineCard component for education/experience timelines
export function TimelineCard({ 
  title, 
  subtitle, 
  period, 
  description, 
  className = '' 
}) {
  return (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg ${className}`}>
      <div className="mb-3 flex justify-between items-start">
        <div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
          <p className="text-blue-400 text-sm">{subtitle}</p>
        </div>
        <span className="text-xs font-medium text-gray-400 bg-gray-700/50 py-1 px-3 rounded-full">{period}</span>
      </div>
      
      <p className="text-gray-300 text-sm mt-3">{description}</p>
    </div>
  );
}

export default Card; 