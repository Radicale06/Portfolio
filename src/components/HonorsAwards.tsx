import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award } from 'lucide-react';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Header = styled.div`
  margin-bottom: 2.5rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.75rem;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const CardTitle = styled.div`
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.text};
`;

const CardMeta = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.125rem;
`;

const CardText = styled.p`
  font-size: 0.8125rem;
  line-height: 1.55;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.375rem;
`;

const HonorsAwards: React.FC = () => {
  const { t } = useTranslation();

  const honors = [
    {
      title: '2nd Place  IDSS AI for Agriculture',
      organization: 'Kaggle',
      description: 'Runner-up in the IDSS competition applying AI to agriculture challenges'
    },
    {
      title: '2nd Place  AI Solution Challenge',
      organization: 'Primatec · PYFAC11',
      description: 'Second place in the AI solution challenge led by Primatec at the PYFAC11 event'
    },
    {
      title: "6th Place  Cain's Jawbone Murder Mystery",
      organization: 'Zindi',
      description: 'Top-10 finish reordering the famously scrambled 100-page murder mystery with NLP'
    },
    {
      title: 'Top 4%  Multi-Class Classification',
      organization: 'Kaggle',
      description: 'Ranked in the top 4% of participants in a multi-class classification competition'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Section id="honors" $surface $borderTop>
      <Container>
        <Header>
          <Kicker>Recognition</Kicker>
          <SectionTitle {...fadeUp}>{t('honors.title')}</SectionTitle>
        </Header>

        <Grid
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {honors.map(honor => (
            <Card key={honor.title} variants={itemVariants}>
              <IconBox>
                <Award size={15} />
              </IconBox>
              <div>
                <CardTitle>{honor.title}</CardTitle>
                <CardMeta>{honor.organization}</CardMeta>
                <CardText>{honor.description}</CardText>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HonorsAwards;
