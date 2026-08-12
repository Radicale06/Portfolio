import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.25rem;
`;

const OrgHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.75rem;
`;

const OrgIcon = styled.div`
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const OrgName = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.3;
`;

const OrgAbbr = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Positions = styled.ul`
  display: flex;
  flex-direction: column;

  li + li {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const Position = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;
`;

const PositionTitle = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const PositionDuration = styled.span`
  flex-shrink: 0;
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Volunteering: React.FC = () => {
  const { t } = useTranslation();

  const volunteeringData = [
    {
      organization: 'Google Developer Student Club',
      abbreviation: 'GDSC FSS',
      logo: '/images/logos/gdsc.png',
      positions: [
        { title: 'Member', duration: '2020  2025' },
        { title: 'Treasurer', duration: '2023  2024' }
      ]
    },
    {
      organization: 'SecuriNets Club',
      abbreviation: 'SecuriNets FSS',
      logo: '/images/logos/securinets.jpg',
      positions: [
        { title: 'Member', duration: '2022  2023' },
        { title: 'Treasurer', duration: '2022  2023' }
      ]
    },
    {
      organization: 'NATEG ENIS Student Chapter',
      abbreviation: 'NATEG ENIS',
      logo: '/images/logos/nateg-enis.jpg',
      positions: [{ title: 'EfS Manager', duration: '2023  2024' }]
    },
    {
      organization: 'IEEE FSS Student Branch',
      abbreviation: 'IEEE FSS SB',
      logo: '/images/logos/ieee-fss.png',
      positions: [
        { title: 'Member', duration: '2021  2026' },
        { title: 'Vice-Chair, IEEE Computer Society FSS SBC', duration: '2023  2024' },
        { title: 'Chair, IEEE Computer Society FSS SBC', duration: '2024  2025' }
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Section id="volunteering" $borderTop>
      <Container>
        <Header>
          <Kicker>Community</Kicker>
          <SectionTitle {...fadeUp}>{t('volunteering.title')}</SectionTitle>
        </Header>

        <Grid
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {volunteeringData.map(org => (
            <Card key={org.organization} variants={itemVariants}>
              <OrgHeader>
                <OrgIcon>
                  <img
                    src={`${process.env.PUBLIC_URL}${org.logo}`}
                    alt={`${org.abbreviation} logo`}
                    loading="lazy"
                  />
                </OrgIcon>
                <div>
                  <OrgName>{org.organization}</OrgName>
                  <OrgAbbr>{org.abbreviation}</OrgAbbr>
                </div>
              </OrgHeader>
              <Positions>
                {org.positions.map(position => (
                  <Position key={position.title}>
                    <PositionTitle>{position.title}</PositionTitle>
                    <PositionDuration>{position.duration}</PositionDuration>
                  </Position>
                ))}
              </Positions>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Volunteering;
