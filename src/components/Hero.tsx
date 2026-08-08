import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = styled.section`
  padding: 9rem 4rem 4rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 7rem 1.5rem 2.5rem;
  }
`;

const HeroContainer = styled.div`
  max-width: 1312px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 42rem;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  border-radius: 32px;
  padding: 0.25rem 0.75rem;
  font-size: 0.6875rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const BadgeDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
`;

const Headline = styled(motion.h1)`
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 0.9375rem;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 32rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  padding: 0.625rem 1.25rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.muted};
  }
`;

const HeroAside = styled(motion.div)`
  flex-shrink: 0;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 4rem;

  [dir='rtl'] & {
    margin-right: 0;
    margin-left: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 0;
    width: 100%;
    max-width: 20rem;
    margin-right: 0;

    [dir='rtl'] & {
      margin-left: 0;
    }
  }
`;

const ProfileImg = styled.img`
  width: 15rem;
  height: 18rem;
  border-radius: 24px;
  object-fit: cover;
  object-position: center top;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: auto;
    aspect-ratio: 3 / 4;
  }
`;

const StatsGrid = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  text-align: center;
  width: 100%;
`;

const StatTile = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: 16px;
  padding: 0.625rem 0.75rem;
`;

const StatValue = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const StatLabel = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '20+', label: 'Projects' },
    { value: '3', label: 'SaaS products' },
    { value: '4', label: 'Awards' }
  ];

  return (
    <HeroSection id="home">
      <HeroContainer>
        <HeroContent>
          <Badge
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BadgeDot />
            AI Engineer @ Quicky Prime
          </Badge>

          <Headline
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Building intelligent
            <br />
            <span>systems that think.</span>
          </Headline>

          <Subtitle
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm Oussama Chaabene  an AI engineer building agentic AI systems:
            real-time voice agents, automated chatbots, scalable RAG
            architectures and distributed LLM deployments that solve real-world
            technical challenges.
          </Subtitle>

          <ButtonGroup
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <PrimaryButton href="#projects">
              See my work
              <ArrowRight size={14} />
            </PrimaryButton>
            <SecondaryButton
              href={`${process.env.PUBLIC_URL}/Oussama_Resume.pdf`}
              download
            >
              <Download size={14} />
              {t('hero.downloadResume')}
            </SecondaryButton>
          </ButtonGroup>
        </HeroContent>

        <HeroAside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfileImg
            src={`${process.env.PUBLIC_URL}/images/Profile-image.jpeg`}
            alt="Oussama Chaabene"
            onError={e => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <StatsGrid>
            {stats.map(stat => (
              <StatTile key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatTile>
            ))}
          </StatsGrid>
        </HeroAside>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
