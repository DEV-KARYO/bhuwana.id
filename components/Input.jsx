'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff } from 'lucide-react';

export const Input = ({
  label,
  placeholder,
  type = 'text',
  error = null,
  success = false,
  required = false,
  disabled = false,
  icon: Icon = null,
  className = '',
  onChange,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon size={18} />
          </div>
        )}

        <input
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-3 rounded-xl border-2 transition-all font-medium
            ${Icon ? 'pl-12' : ''}
            ${
              error
                ? 'border-red-300 focus:border-red-500 bg-red-50/50'
                : success
                  ? 'border-emerald-300 focus:border-emerald-500 bg-emerald-50/50'
                  : 'border-slate-200 focus:border-indigo-500 bg-white'
            }
            ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : ''}
            focus:outline-none focus:ring-0
            ${className}
          `}
          {...props}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {error && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
            <AlertCircle size={18} />
          </div>
        )}

        {success && !error && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
            <CheckCircle size={18} />
          </div>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
          <AlertCircle size={14} /> {error}
        </p>
      )}

      {success && !error && (
        <p className="mt-2 text-sm text-emerald-600 font-medium flex items-center gap-1">
          <CheckCircle size={14} /> Valid
        </p>
      )}
    </div>
  );
};

export const Textarea = ({
  label,
  placeholder,
  error = null,
  required = false,
  disabled = false,
  rows = 4,
  className = '',
  onChange,
  value,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        value={value}
        onChange={onChange}
        className={`
          w-full px-4 py-3 rounded-xl border-2 transition-all font-medium resize-none
          ${
            error
              ? 'border-red-300 focus:border-red-500 bg-red-50/50'
              : 'border-slate-200 focus:border-indigo-500 bg-white'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed bg-slate-50' : ''}
          focus:outline-none focus:ring-0
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600 font-medium flex items-center gap-1">
          <AlertCircle size={14} /> {error}
        </p>
      )}
    </div>
  );
};

export default Input;
