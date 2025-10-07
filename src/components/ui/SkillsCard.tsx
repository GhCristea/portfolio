import React from 'react';

export interface SkillsCardProps {
  title: string;
  items: string[];
  className?: string;
}

export default function SkillsCard({ title, items, className = '' }: SkillsCardProps): React.JSX.Element {
  return (
    <div className={`rounded-lg border border-border bg-card p-6 shadow-sm ${className}`}>
      <h3 className="mb-4 text-lg font-semibold text-foreground">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-start text-sm text-foreground/80"
          >
            <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
