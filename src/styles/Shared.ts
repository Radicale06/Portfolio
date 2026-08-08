import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section<{ $surface?: boolean; $borderTop?: boolean; $borderBottom?: boolean }>`
  padding: 3.5rem 4rem;
  background-color: ${({ theme, $surface }) =>
    $surface ? theme.colors.surface : theme.colors.background};
  border-top: ${({ theme, $borderTop }) =>
    $borderTop ? `1px solid ${theme.colors.border}` : 'none'};
  border-bottom: ${({ theme, $borderBottom }) =>
    $borderBottom ? `1px solid ${theme.colors.border}` : 'none'};
  transition: background-color 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2.5rem 1.5rem;
  }
`;

export const Container = styled.div`
  max-width: 1312px;
  margin: 0 auto;
`;

export const Kicker = styled.p`
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.5rem;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

export const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
} as const;
