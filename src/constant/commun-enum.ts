enum Language {
  PORTUGUESE = 'pt-br',
  ENGLISH = 'en',
  SPANISH = 'es',
  DEFAULT = ENGLISH,
}

enum LocalStorageItems {
  THEME = 'theme',
  LANGUAGE = 'language',
}

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export { ThemeMode, Language, LocalStorageItems };
