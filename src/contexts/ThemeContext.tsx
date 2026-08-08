import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Theme {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    background: string;
    surface: string;
    muted: string;
    text: string;
    textSecondary: string;
    border: string;
    accent: string;
    gradient: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

const fonts = {
  primary: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  secondary: "'Fira Code', 'Courier New', monospace"
};

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1440px'
};

const lightTheme: Theme = {
  colors: {
    primary: '#7c5c3e',
    primaryForeground: '#faf7f4',
    secondary: '#e8ddd4',
    secondaryForeground: '#7c5c3e',
    background: '#faf7f4',
    surface: '#f5f0ea',
    muted: '#ede7e0',
    text: '#1e1a17',
    textSecondary: '#9c8878',
    border: '#e6ddd5',
    accent: '#b8956a',
    gradient: 'linear-gradient(135deg, #b8956a 0%, #7c5c3e 100%)'
  },
  fonts,
  breakpoints
};

const darkTheme: Theme = {
  colors: {
    primary: '#b8956a',
    primaryForeground: '#1a1512',
    secondary: '#2b231c',
    secondaryForeground: '#d9c5ab',
    background: '#171310',
    surface: '#1e1915',
    muted: '#272019',
    text: '#f0e9e1',
    textSecondary: '#a08d7a',
    border: '#332b23',
    accent: '#c9a578',
    gradient: 'linear-gradient(135deg, #c9a578 0%, #8a6845 100%)'
  },
  fonts,
  breakpoints
};

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as 'light' | 'dark') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
