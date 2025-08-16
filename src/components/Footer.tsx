import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 3rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;
  font-size: 1.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <SocialLinks>
          <SocialLink
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/oussama-chaabene/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:chaabaneoussama@fss.u-sfax.tn"
            aria-label="Email"
          >
            <FiMail />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          © {currentYear} Oussama Chaabene. {t('footer.rights')}
        </Copyright>
      </Container>
    </FooterSection>
  );
};

export default Footer;