import React from 'react';

function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  descriptionClassName = '',
  titleColor = 'text-white',
  subtitleColor = 'text-blue-400',
  descriptionColor = 'text-gray-300',
  withSeparator = true
}) {
  return (
    <div className={`relative mb-8 ${className} ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`inline-block ${subtitleColor} text-sm font-medium tracking-wider uppercase mb-3 relative ${subtitleClassName}`}>
          <span className="relative z-10">{subtitle}</span>
          {centered && (
            <>
              <div className="absolute h-[1px] w-16 bg-blue-500/30 top-1/2 -left-20"></div>
              <div className="absolute h-[1px] w-16 bg-blue-500/30 top-1/2 -right-20"></div>
            </>
          )}
        </span>
      )}

      <h2 className={`text-3xl md:text-5xl font-bold ${titleColor} mb-6 tracking-tight ${titleClassName}`}>
        {title}
        {withSeparator && (
          <span className={`block h-1.5 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mt-5 rounded-full ${centered ? 'mx-auto' : ''}`}></span>
        )}
      </h2>

      {description && (
        <p className={`${descriptionColor} max-w-xl ${centered ? 'mx-auto' : ''} text-lg ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;