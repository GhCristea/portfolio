import type { TimelineItem as TimelineItemType } from '@/data/timeline';
import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

export default function Timeline({ children }: TimelineProps): React.JSX.Element {
  return (
    <div className="relative space-y-8">
      {/* Vertical connector line */}
      <div className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-primary to-primary-light" />
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
      <div className="absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-md">
        {item.year.slice(-2)}
      </div>
      
      {/* Content */}
      <div className="flex-1 pt-0.5">
        <h4 className="mb-1 text-lg font-semibold text-foreground">
          {item.title}
        </h4>
        <time className="mb-2 block text-sm font-medium text-primary">
          {item.year}
        </time>
        <p className="text-sm text-muted-foreground">
          {item.description}
        </p>
      </div>
    </div>
  );
};
