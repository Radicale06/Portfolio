import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2.5rem 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Copyright = styled.span`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Links = styled.div`
  display: flex;
  gap: 1.25rem;
`;

const FooterLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <Copyright>
          © {currentYear} Oussama Chaabene. {t('footer.rights')}
        </Copyright>
        <Links>
          <FooterLink
            href="https://github.com/Radicale06"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/oussama-chaabene/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </FooterLink>
          <FooterLink href="mailto:oussamachaabeneeee@gmail.com">
            Email
          </FooterLink>
        </Links>
      </Container>
    </FooterSection>
  );
};

export default Footer;
