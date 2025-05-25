import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { ConfigProvider, theme } from 'antd';
import { LocalStorageItems, ThemeMode } from '../constant/commun-enum';

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
    const theme = isThemeDark ? ThemeMode.LIGHT : ThemeMode.DARK;
    localStorage.setItem(LocalStorageItems.THEME, theme);
  };

  useEffect(() => {
    const savedIsThemeDark =
      localStorage.getItem(LocalStorageItems.THEME) || ThemeMode.DARK;
    setIsThemeDark(savedIsThemeDark === ThemeMode.DARK);
  });

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
