'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({
  items = [],
  defaultOpenIndex = null,
  allowMultiple = false,
}) => {
  const [openIndices, setOpenIndices] = useState(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggleItem = (index) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-colors"
        >
          {/* Header */}
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-slate-50 transition-colors font-bold text-slate-900"
          >
            <span>{item.title}</span>
            <ChevronDown
              size={20}
              className={`transition-transform ${
                openIndices.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>

          {/* Content */}
          {openIndices.includes(index) && (
            <div className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200 animate-slide-down">
              <p className="text-slate-600 leading-relaxed">{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const Tabs = ({
  tabs = [],
  defaultTab = 0,
  onChange = null,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabChange = (index) => {
    setActiveTab(index);
    onChange?.(index);
  };

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 border-b-2 border-slate-200 overflow-x-auto custom-scrollbar mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={`
              px-6 py-3 font-bold text-sm whitespace-nowrap transition-all
              border-b-2 -mb-[2px]
              ${
                activeTab === index
                  ? 'text-indigo-950 border-b-indigo-950'
                  : 'text-slate-600 border-b-transparent hover:text-slate-900'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="animate-fade-in">
        {tabs[activeTab] && (
          <div>{tabs[activeTab].content}</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
