'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Carousel = ({
  items = [],
  autoplay = true,
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
  itemsPerView = 1,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);
  const autoplayRef = useRef(null);

  const itemCount = items.length;
  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView);

  // Autoplay effect
  useEffect(() => {
    if (!isAutoplay || itemCount <= itemsPerView) return;

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerView >= itemCount ? 0 : prev + itemsPerView));
    }, autoplayInterval);

    return () => clearInterval(autoplayRef.current);
  }, [isAutoplay, itemCount, itemsPerView, autoplayInterval]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, itemCount - itemsPerView));
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(autoplay), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? itemCount - itemsPerView : prev - itemsPerView));
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(autoplay), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerView >= itemCount ? 0 : prev + itemsPerView));
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(autoplay), 5000);
  };

  if (itemCount === 0) {
    return <div className="text-center py-12 text-slate-400">No items to display</div>;
  }

  return (
    <div className="relative w-full">
      {/* Items Container */}
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && itemCount > itemsPerView && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 transition-all shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-slate-900 rounded-full p-2 transition-all shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && itemCount > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(itemCount / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * itemsPerView)}
                className={`
                  h-2.5 rounded-full transition-all
                  ${
                    currentIndex === index * itemsPerView
                      ? 'bg-indigo-600 w-8'
                      : 'bg-slate-300 w-2.5 hover:bg-slate-400'
                  }
                `}
                aria-label={`Go to slide ${index + 1}`}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export const Slider = ({
  min = 0,
  max = 100,
  value = 50,
  onChange,
  step = 1,
  label,
  showValue = true,
}) => {
  return (
    <div>
      {label && (
        <label className="block text-sm font-bold text-slate-900 mb-2">
          {label}
        </label>
      )}

      <div className="flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange?.(parseFloat(e.target.value))}
          className="flex-1 h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-indigo-600"
        />
        {showValue && (
          <span className="text-sm font-bold text-slate-900 min-w-[50px] text-right">
            {value}
          </span>
        )}
      </div>
    </div>
  );
};

export default Carousel;
