import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Content = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 2rem;
`;

const InfoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const InfoCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoValue = styled.h3`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const InfoLabel = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const About: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const infoCards = [
    { value: '0+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Completed' },
    { value: '5+', label: 'Technologies Mastered' },
    { value: '4', label: 'Certifications' }
  ];

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Title variants={itemVariants}>
            {t('about.title')}
          </Title>
          
          <Content variants={itemVariants}>
            <AboutText>
              {t('about.content')}
            </AboutText>
          </Content>

          <InfoGrid variants={containerVariants}>
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <InfoValue>{card.value}</InfoValue>
                <InfoLabel>{card.label}</InfoLabel>
              </InfoCard>
            ))}
          </InfoGrid>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;