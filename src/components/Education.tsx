import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Header = styled.div`
  margin-bottom: 2.5rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.25rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const Degree = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Institution = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
`;

const YearBadge = styled.span`
  flex-shrink: 0;
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  background-color: ${({ theme }) => theme.colors.muted};
  border-radius: 4px;
  padding: 0.125rem 0.5rem;
  white-space: nowrap;
`;

const Field = styled.p`
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.5rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.75rem;
`;

const Education: React.FC = () => {
  const { t } = useTranslation();

  const education = [
    {
      degree: 'Engineering Degree',
      institution: 'Faculty Of Sciences Of Sfax',
      field: 'Computer Science, speciality Data Engineering',
      years: '2022  2025',
      location: 'Sfax, Tunisia'
    },
    {
      degree: 'Integrated Preparatory',
      institution: 'Faculty Of Sciences Of Sfax',
      field: 'Computer Science',
      years: '2020  2022',
      location: 'Sfax, Tunisia'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Section id="education" $surface $borderTop>
      <Container>
        <Header>
          <Kicker>Credentials</Kicker>
          <SectionTitle {...fadeUp}>{t('education.title')}</SectionTitle>
        </Header>

        <Grid
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map(edu => (
            <Card key={edu.degree} variants={itemVariants}>
              <CardHeader>
                <div>
                  <Degree>{edu.degree}</Degree>
                  <Institution>{edu.institution}</Institution>
                </div>
                <YearBadge>{edu.years}</YearBadge>
              </CardHeader>
              <Field>
                <strong>{t('education.field')}:</strong> {edu.field}
              </Field>
              <Location>
                <MapPin size={12} />
                {edu.location}
              </Location>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Education;
