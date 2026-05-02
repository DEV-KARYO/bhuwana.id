'use client';

import { useState, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const ToastContext = {
  toasts: [],
  listeners: [],
};

export const useToast = () => {
  const show = useCallback(
    (message, type = 'info', duration = 4000) => {
      const id = Date.now();
      const toast = { id, message, type, duration };

      ToastContext.toasts.push(toast);
      ToastContext.listeners.forEach((listener) => listener([...ToastContext.toasts]));

      if (duration > 0) {
        setTimeout(() => {
          ToastContext.toasts = ToastContext.toasts.filter((t) => t.id !== id);
          ToastContext.listeners.forEach((listener) => listener([...ToastContext.toasts]));
        }, duration);
      }

      return id;
    },
    []
  );

  return {
    show,
    success: (msg, duration) => show(msg, 'success', duration),
    error: (msg, duration) => show(msg, 'error', duration),
    info: (msg, duration) => show(msg, 'info', duration),
    warning: (msg, duration) => show(msg, 'warning', duration),
  };
};

export const ToastContainer = () => {
  const [toasts, setToasts] = useState([]);

  // Subscribe to toast updates
  if (!ToastContext.listeners.includes(setToasts)) {
    ToastContext.listeners.push(setToasts);
  }

  const removeToast = (id) => {
    ToastContext.toasts = ToastContext.toasts.filter((t) => t.id !== id);
    setToasts([...ToastContext.toasts]);
  };

  const getIcon = (type) => {
    const iconProps = { size: 20 };
    switch (type) {
      case 'success':
        return <CheckCircle {...iconProps} />;
      case 'error':
        return <AlertCircle {...iconProps} />;
      case 'warning':
        return <AlertTriangle {...iconProps} />;
      default:
        return <Info {...iconProps} />;
    }
  };

  const getStyles = (type) => {
    const base = 'rounded-xl px-5 py-4 shadow-xl border-l-4 animate-slide-in-up';
    switch (type) {
      case 'success':
        return `${base} bg-emerald-50 border-l-emerald-500 text-emerald-900`;
      case 'error':
        return `${base} bg-red-50 border-l-red-500 text-red-900`;
      case 'warning':
        return `${base} bg-amber-50 border-l-amber-500 text-amber-900`;
      default:
        return `${base} bg-blue-50 border-l-blue-500 text-blue-900`;
    }
  };

  return (
    <div className="fixed top-6 right-6 z-[1000] space-y-3 max-w-sm pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${getStyles(toast.type)} flex items-start gap-3 pointer-events-auto`}
        >
          <div className="mt-0.5 flex-shrink-0">{getIcon(toast.type)}</div>
          <p className="flex-1 font-medium text-sm leading-relaxed">
            {toast.message}
          </p>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 text-current opacity-50 hover:opacity-100 transition-opacity"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
