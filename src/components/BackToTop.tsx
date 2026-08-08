import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Button = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 900;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background}e6;
  backdrop-filter: blur(12px);
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(30, 26, 23, 0.12);
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryForeground};
  }

  [dir='rtl'] & {
    right: auto;
    left: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: 1.25rem;
    right: 1.25rem;

    [dir='rtl'] & {
      left: 1.25rem;
    }
  }
`;

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <Button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.92 }}
        >
          <ArrowUp size={18} />
        </Button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
