'use client';

import React from 'react';

/**
 * Progress Component
 * Displays progress bar for loading states and task completion
 * Supports: Linear progress, circular progress, colors, labels
 */

export const Progress = ({
  value = 0,
  max = 100,
  label = false,
  showPercent = false,
  color = 'indigo',
  size = 'md',
  animated = true,
  className = '',
}) => {
  const percentage = Math.round((value / max) * 100);
  const isComplete = percentage >= 100;

  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
    xl: 'h-4',
  };

  const colorClasses = {
    indigo: 'bg-indigo-600',
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    amber: 'bg-amber-600',
    red: 'bg-red-600',
    purple: 'bg-purple-600',
    pink: 'bg-pink-600',
  };

  return (
    <div className={className}>
      {(label || showPercent) && (
        <div className="flex justify-between mb-2">
          {label && (
            <span className="text-sm font-medium text-slate-700">
              {label}
            </span>
          )}
          {showPercent && (
            <span className="text-sm font-medium text-slate-600">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div
        className={`
          w-full bg-slate-200 rounded-full overflow-hidden
          ${sizeClasses[size]}
          transition-all duration-500
        `}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className={`
            h-full rounded-full transition-all duration-500
            ${colorClasses[color]}
            ${animated && !isComplete ? 'animate-pulse-ring' : ''}
            ${isComplete ? 'animate-pulse' : ''}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

/**
 * CircularProgress Component
 * Displays circular progress indicator
 */
export const CircularProgress = ({
  value = 0,
  max = 100,
  size = 'md',
  color = 'indigo',
  label = true,
  animated = true,
}) => {
  const percentage = Math.round((value / max) * 100);

  const sizeClasses = {
    sm: { svg: 40, text: 12 },
    md: { svg: 80, text: 18 },
    lg: { svg: 120, text: 24 },
  };

  const colorClasses = {
    indigo: 'stroke-indigo-600',
    blue: 'stroke-blue-600',
    green: 'stroke-green-600',
    amber: 'stroke-amber-600',
    red: 'stroke-red-600',
    purple: 'stroke-purple-600',
    pink: 'stroke-pink-600',
  };

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const svgSize = sizeClasses[size].svg;
  const textSize = sizeClasses[size].text;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: svgSize, height: svgSize }}>
        <svg
          viewBox="0 0 100 100"
          className="transform -rotate-90"
          style={{ width: svgSize, height: svgSize }}
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="3"
          />

          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            className={`${colorClasses[color]} transition-all duration-500`}
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
        </svg>

        {/* Center label */}
        {label && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="font-bold text-slate-900"
              style={{ fontSize: `${textSize}px` }}
            >
              {percentage}%
            </span>
          </div>
        )}
      </div>

      {/* Animated pulse indicator */}
      {animated && percentage < 100 && (
        <div className="flex gap-2 mt-2">
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce-soft" />
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce-soft" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce-soft" style={{ animationDelay: '0.2s' }} />
        </div>
      )}
    </div>
  );
};

/**
 * ProgressStep Component
 * Shows progress through multiple steps
 */
export const ProgressStep = ({ steps = [], currentStep = 0, variant = 'linear' }) => {
  if (variant === 'linear') {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              style={{ flex: 1 }}
            >
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center font-semibold
                  mb-2 transition-all duration-300
                  ${index <= currentStep
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                  }
                `}
              >
                {index + 1}
              </div>
              <span className="text-xs text-slate-600 text-center">{step}</span>
            </div>
          ))}
        </div>

        {/* Progress line */}
        <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <div
            className={`
              w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs
              transition-all duration-300
              ${index <= currentStep
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-200 text-slate-600'
              }
            `}
          >
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};
