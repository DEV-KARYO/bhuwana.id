'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb Component System
 * Navigation breadcrumb trail with customizable separators
 */

export const Breadcrumb = ({ children, separator = 'chevron', className = '' }) => {
  const separatorClasses = {
    chevron: <ChevronRight size={16} className="text-slate-400" />,
    slash: <span className="text-slate-400">/</span>,
    dot: <span className="text-slate-400">•</span>,
    pipe: <span className="text-slate-400">|</span>,
    arrow: <span className="text-slate-400">→</span>,
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <nav
      className={`flex items-center gap-2 ${className}`}
      aria-label="Breadcrumb"
    >
      {childrenArray.map((child, index) => (
        <div key={index} className="flex items-center gap-2">
          {child}
          {index < childrenArray.length - 1 && (
            <div className="flex items-center text-slate-400">
              {separatorClasses[separator]}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

/**
 * BreadcrumbItem Component
 * Individual breadcrumb item with optional link
 */
export const BreadcrumbItem = ({
  href,
  children,
  isActive = false,
  useHomeIcon = false,
}) => {
  const baseClasses =
    'text-sm transition-colors duration-200';
  const linkClasses =
    'text-indigo-600 hover:text-indigo-700 hover:underline';
  const activeClasses = 'text-slate-900 font-medium pointer-events-none';

  if (useHomeIcon) {
    return (
      <Link
        href={href || '/'}
        className={`${baseClasses} ${isActive ? activeClasses : linkClasses} flex items-center`}
      >
        <Home size={16} />
        <span className="sr-only">Home</span>
      </Link>
    );
  }

  if (href && !isActive) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${linkClasses}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <span
      className={`${baseClasses} ${activeClasses}`}
      aria-current="page"
    >
      {children}
    </span>
  );
};

/**
 * BreadcrumbList Component
 * Breadcrumb with auto-collapsing on mobile
 */
export const BreadcrumbList = ({
  items = [],
  currentPage = '',
  showHome = true,
  separator = 'chevron',
  className = '',
}) => {
  const displayItems = items.slice(-2); // Show only last 2 items on mobile
  const allItems = showHome
    ? [{ label: 'Home', href: '/' }, ...items]
    : items;

  return (
    <nav
      className={`flex items-center gap-2 overflow-x-auto pb-2 ${className}`}
      aria-label="Breadcrumb"
    >
      {/* Show all on desktop */}
      <div className="hidden md:flex items-center gap-2 flex-1">
        {allItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index === 0 && showHome ? (
              <Link
                href={item.href}
                className="text-indigo-600 hover:text-indigo-700 transition-colors"
              >
                <Home size={16} />
              </Link>
            ) : (
              <Link
                href={item.href}
                className={`text-sm transition-colors ${
                  item.label === currentPage
                    ? 'text-slate-900 font-medium'
                    : 'text-indigo-600 hover:text-indigo-700'
                }`}
              >
                {item.label}
              </Link>
            )}
            {index < allItems.length - 1 && (
              <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Show condensed on mobile */}
      <div className="flex md:hidden items-center gap-2 flex-1 min-w-0">
        {showHome && (
          <>
            <Link
              href="/"
              className="text-indigo-600 hover:text-indigo-700 transition-colors flex-shrink-0"
            >
              <Home size={16} />
            </Link>
            <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
          </>
        )}
        {displayItems.map((item, index) => (
          <div key={index} className="flex items-center gap-2 min-w-0">
            <span className="text-sm text-slate-900 font-medium truncate">
              {item.label}
            </span>
            {index < displayItems.length - 1 && (
              <ChevronRight size={16} className="text-slate-400 flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

/**
 * BreadcrumbWithCollapse Component
 * Breadcrumb that automatically collapses overflow items
 */
export const BreadcrumbWithCollapse = ({
  items = [],
  maxItems = 3,
  separator = 'chevron',
  className = '',
}) => {
  const separatorIcon = {
    chevron: <ChevronRight size={16} />,
    slash: <span>/</span>,
    dot: <span>•</span>,
  }[separator];

  const itemsToShow = items.length > maxItems
    ? [items[0], { label: '...', disabled: true }, ...items.slice(-(maxItems - 2))]
    : items;

  return (
    <nav
      className={`flex items-center gap-2 ${className}`}
      aria-label="Breadcrumb"
    >
      {itemsToShow.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.disabled ? (
            <span className="text-sm text-slate-500">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className={`text-sm transition-colors ${
                index === itemsToShow.length - 1
                  ? 'text-slate-900 font-medium'
                  : 'text-indigo-600 hover:text-indigo-700'
              }`}
            >
              {item.label}
            </Link>
          )}
          {index < itemsToShow.length - 1 && (
            <div className="text-slate-400 flex-shrink-0">
              {separatorIcon}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};
