'use client';

import React, { useEffect, useRef, useState } from 'react';

interface InViewProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export default function InView({ 
  children, 
  className = '', 
  threshold = 0.1 
}: InViewProps): React.JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after first intersection
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );
    
    observer.observe(element);
    
    return () => {
      observer.unobserve(element);
    };
  }, [threshold]);
  
  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
}
