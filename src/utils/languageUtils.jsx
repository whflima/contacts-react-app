import { Language } from '../constant/commun-enum';

function getUserLanguage() {
  const languageNavigator = getUserLanguageFromNavigator().toLowerCase();
  return languageNavigator || Language.DEFAULT
}

function getUserLanguageFromNavigator() {
  return navigator.language || navigator.userLanguage;
}

export default getUserLanguage;