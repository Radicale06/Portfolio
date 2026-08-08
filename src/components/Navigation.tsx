import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const languages = [
  { code: 'en', name: 'English', dir: 'ltr' },
  { code: 'fr', name: 'Français', dir: 'ltr' },
  { code: 'ar', name: 'العربية', dir: 'rtl' }
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.colors.background}e6;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 1.125rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 1.5rem;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  white-space: nowrap;
`;

const BrandName = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const BrandRole = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 1.75rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.li`
  a {
    font-size: 0.8125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const MobileMenuButton = styled(IconButton)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(30, 26, 23, 0.08);
  min-width: 130px;

  [dir='rtl'] & {
    right: auto;
    left: 0;
  }
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 0.625rem 0.875rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background-color: ${({ theme }) => theme.colors.surface};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.75rem 1.5rem 1.25rem;
  flex-direction: column;
  gap: 0.25rem;

  a {
    display: block;
    padding: 0.625rem 0;
    font-size: 0.9375rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const Navigation: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dir =
      languages.find(lang => lang.code === i18n.language)?.dir || 'ltr';
  }, [i18n.language]);

  const navItems = ['about', 'skills', 'experience', 'projects', 'education', 'honors', 'contact'];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <Nav>
      <NavContainer>
        <Brand href="#home">
          <BrandName>Oussama Chaabene</BrandName>
          <BrandRole> AI Engineer</BrandRole>
        </Brand>

        <NavLinks>
          {navItems.map(item => (
            <NavLink key={item}>
              <a href={`#${item}`}>{t(`nav.${item}`)}</a>
            </NavLink>
          ))}
        </NavLinks>

        <Controls>
          <LanguageSelector>
            <IconButton
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Change language"
            >
              <Globe size={16} />
              <span>{i18n.language?.toUpperCase().slice(0, 2)}</span>
            </IconButton>

            <AnimatePresence>
              {langDropdownOpen && (
                <LanguageDropdown
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                >
                  {languages.map(lang => (
                    <LanguageOption
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? 'active' : ''}
                    >
                      {lang.name}
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              )}
            </AnimatePresence>
          </LanguageSelector>

          <IconButton onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </IconButton>

          <MobileMenuButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </MobileMenuButton>
        </Controls>
      </NavContainer>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(item => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(`nav.${item}`)}
              </a>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  );
};

export default Navigation;
