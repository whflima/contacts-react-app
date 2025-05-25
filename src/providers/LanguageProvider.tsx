import React, { createContext, useContext, useEffect, useState } from 'react';
import i18n from '../utils/i18n.index';
import { LocalStorageItems } from '../constant/commun-enum';
import getUserLanguage from '../utils/languageUtils';

interface LanguageContextType {
  changeLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [languageI18n] = useState(i18n);

  const changeLanguage = (language: string) => {
    localStorage.setItem(LocalStorageItems.LANGUAGE, language);
    languageI18n.changeLanguage(language);
  };

  useEffect(() => {  
    const storedLanguage = localStorage.getItem(LocalStorageItems.LANGUAGE) || getUserLanguage();
    languageI18n.changeLanguage(storedLanguage)
  }, [languageI18n]);

  return (
    <LanguageContext.Provider value={{ changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageProvider = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTheme must be used within a LanguageProvider');
  }
  return context;
};
