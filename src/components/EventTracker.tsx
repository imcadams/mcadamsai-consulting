// src/components/EventTracker.tsx
'use client';

import { usePlausible } from 'next-plausible';
import { ReactNode } from 'react';

interface EventTrackerProps {
  eventName: string;
  props?: Record<string, string | number | boolean>;
  children: ReactNode;
  className?: string;
}

export default function EventTracker({ 
  eventName, 
  props = {}, 
  children, 
  className = '' 
}: EventTrackerProps) {
  const plausible = usePlausible();
  
  const handleClick = () => {
    plausible(eventName, { props });
  };
  
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
}
