import React from 'react';

export interface SkillsCardProps {
  title: string;
  items: string[];
  className?: string;
}

export default function SkillsCard({ title, items, className = '' }: SkillsCardProps): React.JSX.Element {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start text-sm text-gray-700 dark:text-gray-300"
          >
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
