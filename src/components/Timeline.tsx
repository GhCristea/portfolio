import React from 'react';
import type { TimelineItem as TimelineItemType } from '@/data/timeline';

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps): React.JSX.Element {
  return (
    <div className="relative space-y-8">
      {/* Vertical connector line */}
      <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-blue-600 to-blue-300 dark:from-blue-400 dark:to-blue-600" />
      {children}
    </div>
  );
}

interface TimelineItemProps {
  item: TimelineItemType;
}

Timeline.Item = function TimelineItem({ item }: TimelineItemProps): React.JSX.Element {
  return (
    <div className="relative flex gap-6 pl-12">
      {/* Year badge */}
      <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md dark:bg-blue-500">
        {item.year.slice(-2)}
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-0.5">
        <h4 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          {item.title}
        </h4>
        <time className="mb-2 block text-sm font-medium text-blue-600 dark:text-blue-400">
          {item.year}
        </time>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
};
