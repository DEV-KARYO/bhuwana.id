'use client';

import { useState } from 'react';

export const Tooltip = ({
  children,
  content,
  position = 'top',
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  };

  const arrowClasses = {
    top: 'bottom-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900',
    bottom: 'top-[-4px] left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-slate-900',
    left: 'left-full ml-[-4px] top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-slate-900',
    right: 'right-full mr-[-4px] top-1/2 -translate-y-1/2 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-slate-900',
  };

  if (disabled) return children;

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>

      {isVisible && (
        <div
          className={`
            absolute z-50 px-3 py-2 rounded-lg bg-slate-900 text-white text-xs
            font-medium whitespace-nowrap animate-fade-in pointer-events-none
            ${positionClasses[position]}
          `}
        >
          {content}
          <div className={`absolute ${arrowClasses[position]}`} />
        </div>
      )}
    </div>
  );
};

export const ProgressBar = ({
  value = 0,
  max = 100,
  variant = 'primary',
  showLabel = true,
  animated = true,
  size = 'md',
}) => {
  const percentage = Math.min(Math.max(value / max, 0), 1) * 100;

  const variantStyles = {
    primary: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    success: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    warning: 'bg-gradient-to-r from-amber-500 to-orange-600',
    danger: 'bg-gradient-to-r from-red-500 to-pink-600',
  };

  const sizeStyles = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-3.5',
  };

  return (
    <div>
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${sizeStyles[size]}`}>
        <div
          className={`
            ${variantStyles[variant]} ${sizeStyles[size]} rounded-full transition-all duration-500
            ${animated ? 'animate-progress' : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <p className="mt-2 text-sm font-bold text-slate-600">
          {Math.round(percentage)}%
        </p>
      )}
    </div>
  );
};

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex items-center gap-2 py-4">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-slate-400 font-bold">/</span>
          )}
          {item.href ? (
            <a
              href={item.href}
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className={index === items.length - 1 ? 'text-slate-900 font-bold' : 'text-slate-600'}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Tooltip;
