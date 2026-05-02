'use client';

import React, { useState } from 'react';

/**
 * Tabs Component System
 * Provides tab navigation with smooth animations and keyboard support
 */

export const Tabs = ({ defaultValue = '', children, onValueChange }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const handleTabChange = (value) => {
    setActiveTab(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className="w-full">
      {React.Children.map(children, (child) => {
        if (child.type === TabsList) {
          return React.cloneElement(child, { activeTab, onTabChange: handleTabChange });
        } else if (child.type === TabsContent) {
          return React.cloneElement(child, { activeTab });
        }
        return child;
      })}
    </div>
  );
};

/**
 * TabsList Component
 * Container for tab trigger buttons
 */
export const TabsList = ({ children, activeTab, onTabChange, variant = 'default' }) => {
  const variantClasses = {
    default: 'border-b border-slate-200',
    pills: 'bg-slate-100 rounded-lg p-1 gap-1',
  };

  return (
    <div
      className={`flex items-center gap-0 ${variantClasses[variant]}`}
      role="tablist"
    >
      {React.Children.map(children, (child) => {
        if (child.type === TabsTrigger) {
          return React.cloneElement(child, {
            activeTab,
            onTabChange,
            variant,
          });
        }
        return child;
      })}
    </div>
  );
};

/**
 * TabsTrigger Component
 * Individual tab button
 */
export const TabsTrigger = ({ value, children, activeTab, onTabChange, variant = 'default' }) => {
  const isActive = activeTab === value;

  const defaultClasses = `
    px-4 py-3 font-medium text-sm
    border-b-2 transition-all duration-200
    ${isActive
      ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400'
      : 'border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400'
    }
    hover:border-slate-300 cursor-pointer focus-ring focus:outline-none
  `;

  const pillClasses = `
    px-3 py-1.5 font-medium text-sm
    rounded transition-all duration-200
    ${isActive
      ? 'bg-white text-indigo-950 shadow-sm'
      : 'text-slate-600 hover:text-slate-900'
    }
    cursor-pointer focus-ring focus:outline-none
  `;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      onClick={() => onTabChange(value)}
      className={variant === 'pills' ? pillClasses : defaultClasses}
    >
      {children}
    </button>
  );
};

/**
 * TabsContent Component
 * Content panel for active tab
 */
export const TabsContent = ({ value, children, activeTab }) => {
  if (activeTab !== value) {
    return null;
  }

  return (
    <div
      className="mt-4 animate-fade-in"
      role="tabpanel"
      aria-labelledby={`trigger-${value}`}
    >
      {children}
    </div>
  );
};
