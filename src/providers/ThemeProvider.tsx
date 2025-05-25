import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ConfigProvider, theme } from 'antd';

interface ThemeContextType {
  isThemeDark: boolean;
  changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const changeTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  return (
    <ThemeContext.Provider value={{ isThemeDark, changeTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isThemeDark ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a Provider');
  }
  return context;
};
