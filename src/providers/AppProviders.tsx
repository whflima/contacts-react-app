import React from 'react';
import { CollapsedProvider } from './CollapsedProvider';
import { ThemeProvider } from './ThemeProvider';
import { LanguageProvider } from './LanguageProvider';

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CollapsedProvider>{children}</CollapsedProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}
