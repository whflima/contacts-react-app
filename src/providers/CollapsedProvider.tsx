import React, { createContext, useContext, useState, ReactNode } from 'react';
import { isMobileScreen } from '../utils/mobileScreen';

interface CollapsedContextType {
  collapsed: boolean;
  changeCollapsed: () => void;
}

const CollapsedContext = createContext<CollapsedContextType | undefined>(undefined);

export const CollapsedProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(isMobileScreen());

  const changeCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <CollapsedContext.Provider value={{ collapsed, changeCollapsed }}>
      {children}
    </CollapsedContext.Provider>
  );
};

export const useCollapsedProvider = () => {
  const context = useContext(CollapsedContext);
  if (!context) {
    throw new Error('useTheme must be used within a CollapsedProvider');
  }
  return context;
};
