import React from 'react';
import { CollapsedProvider } from './CollapsedProvider';
import { ThemeProvider } from './ThemeProvider';

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <CollapsedProvider>{children}</CollapsedProvider>
    </ThemeProvider>
  );
}
