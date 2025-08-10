'use client';

import { useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface LoadingWrapperProps {
  children: ReactNode;
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Epic loading simulation
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  return <>{children}</>;
} 