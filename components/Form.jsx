'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

/**
 * Input Component with validation and error states
 */
export const Input = ({
  label,
  error,
  success,
  disabled = false,
  showPassword = false,
  onTogglePassword,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles =
    'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus-ring';
  const borderStyles = error
    ? 'border-red-500 bg-red-50'
    : success
      ? 'border-emerald-500 bg-emerald-50'
      : isFocused
        ? 'border-indigo-500 bg-white'
        : 'border-slate-200 bg-white hover:border-slate-300';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${baseStyles} ${borderStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        />

        {/* Password toggle */}
        {onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-900 transition-colors"
            tabIndex="-1"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}

        {/* Icons */}
        {error && (
          <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500" size={18} />
        )}
        {success && !error && (
          <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500" size={18} />
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="mt-2 flex items-center gap-2 text-red-600">
          <AlertCircle size={14} />
          <span className="text-xs font-medium">{error}</span>
        </div>
      )}

      {/* Success message */}
      {success && !error && (
        <div className="mt-2 flex items-center gap-2 text-emerald-600">
          <CheckCircle size={14} />
          <span className="text-xs font-medium">{success}</span>
        </div>
      )}
    </div>
  );
};

/**
 * Textarea Component
 */
export const Textarea = ({
  label,
  error,
  success,
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles =
    'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus-ring resize-none';
  const borderStyles = error
    ? 'border-red-500 bg-red-50'
    : success
      ? 'border-emerald-500 bg-emerald-50'
      : isFocused
        ? 'border-indigo-500 bg-white'
        : 'border-slate-200 bg-white hover:border-slate-300';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
        </label>
      )}

      <textarea
        {...props}
        rows={rows}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${baseStyles} ${borderStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      />

      {error && (
        <div className="mt-2 text-xs font-medium text-red-600">{error}</div>
      )}
      {success && !error && (
        <div className="mt-2 text-xs font-medium text-emerald-600">
          {success}
        </div>
      )}
    </div>
  );
};

/**
 * Select Component
 */
export const Select = ({
  label,
  error,
  success,
  options = [],
  disabled = false,
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const baseStyles =
    'w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 appearance-none cursor-pointer focus-ring';
  const borderStyles = error
    ? 'border-red-500 bg-red-50'
    : success
      ? 'border-emerald-500 bg-emerald-50'
      : isFocused
        ? 'border-indigo-500 bg-white'
        : 'border-slate-200 bg-white hover:border-slate-300';

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          {...props}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`${baseStyles} ${borderStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className} pr-10`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {error && (
        <div className="mt-2 text-xs font-medium text-red-600">{error}</div>
      )}
      {success && !error && (
        <div className="mt-2 text-xs font-medium text-emerald-600">
          {success}
        </div>
      )}
    </div>
  );
};

/**
 * Checkbox Component
 */
export const Checkbox = ({
  label,
  error,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="checkbox"
          disabled={disabled}
          className={`w-5 h-5 rounded border-2 border-slate-300 text-indigo-600 transition-all duration-200 cursor-pointer
            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            hover:border-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {label && (
          <span className="text-sm font-medium text-slate-900 group-hover:text-indigo-700 transition-colors">
            {label}
          </span>
        )}
      </label>

      {error && (
        <div className="mt-2 text-xs font-medium text-red-600">{error}</div>
      )}
    </div>
  );
};

/**
 * Radio Component
 */
export const Radio = ({
  label,
  error,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <div className="w-full">
      <label className="flex items-center gap-3 cursor-pointer group">
        <input
          type="radio"
          disabled={disabled}
          className={`w-5 h-5 border-2 border-slate-300 text-indigo-600 transition-all duration-200 cursor-pointer
            focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
            hover:border-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500' : ''} ${className}`}
          {...props}
        />
        {label && (
          <span className="text-sm font-medium text-slate-900 group-hover:text-indigo-700 transition-colors">
            {label}
          </span>
        )}
      </label>

      {error && (
        <div className="mt-2 text-xs font-medium text-red-600">{error}</div>
      )}
    </div>
  );
};

/**
 * Form Group Component
 */
export const FormGroup = ({ children, className = '' }) => {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
};

/**
 * Form Label Component
 */
export const FormLabel = ({ children, required = false, className = '' }) => {
  return (
    <label className={`block text-sm font-bold text-slate-900 ${className}`}>
      {children}
      {required && <span className="text-red-600 ml-1">*</span>}
    </label>
  );
};

/**
 * Form Help Text
 */
export const FormHelp = ({ children, type = 'default', className = '' }) => {
  const colors = {
    default: 'text-slate-600',
    error: 'text-red-600',
    success: 'text-emerald-600',
    info: 'text-blue-600',
  };

  return (
    <p className={`text-xs mt-1 ${colors[type]} ${className}`}>{children}</p>
  );
};

/**
 * Form Submit Button
 */
export const FormSubmit = ({
  children = 'Submit',
  isLoading = false,
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 focus-ring';

  const variants = {
    primary:
      'bg-indigo-950 text-white hover:bg-indigo-900 shadow-lg shadow-indigo-900/10',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        isLoading || disabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${className}`}
    >
      {isLoading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
};
