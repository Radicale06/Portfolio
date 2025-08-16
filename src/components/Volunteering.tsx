import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { BsPeople, BsAward } from 'react-icons/bs';

const VolunteeringSection = styled.section`
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
  font-size: 2.5rem;
`;

const VolunteeringGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const VolunteeringCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const OrganizationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const OrganizationInfo = styled.div`
  flex: 1;
`;

const OrganizationName = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;

const OrganizationAbbr = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 500;
`;

const PositionsList = styled.ul`
  list-style: none;
  margin: 1rem 0;
`;

const Position = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  &:last-child {
    border-bottom: none;
  }
`;

const PositionTitle = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  display: block;
  margin-bottom: 0.25rem;
`;

const PositionDuration = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    font-size: 14px;
  }
`;

const Volunteering: React.FC = () => {
  const { t } = useTranslation();

  const volunteeringData = [
    {
      organization: "Google Developer Student Club",
      abbreviation: "GDSC FSS",
      icon: BsAward,
      positions: [
        {
          title: "Member",
          duration: "2020 - 2025"
        },
        {
          title: "Treasurer",
          duration: "2023 - 2024"
        }
      ]
    },
    {
      organization: "SecuriNets Club",
      abbreviation: "SecuriNets FSS",
      icon: BsPeople,
      positions: [
        {
          title: "Member",
          duration: "2022 - 2023"
        },
        {
          title: "Treasurer",
          duration: "2022 - 2023"
        }
      ]
    },
    {
      organization: "NATEG ENIS Student Chapter",
      abbreviation: "NATEG ENIS",
      icon: BsPeople,
      positions: [
        {
          title: "EfS Manager",
          duration: "2023 - 2024"
        }
      ]
    },
    {
      organization: "IEEE FSS Student Branch",
      abbreviation: "IEEE FSS SB",
      icon: BsPeople,
      positions: [
        {
          title: "Member",
          duration: "2021 - 2026"
        },
        {
          title: "Vice-Chair IEEE Computer Society FSS SBC",
          duration: "2023 - 2024"
        },
        {
          title: "Chair IEEE Computer Society FSS SBC",
          duration: "2024 - 2025"
        }
      ]
    }
  ];

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

  return (
    <VolunteeringSection id="volunteering">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('volunteering.title')}
        </Title>

        <VolunteeringGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {volunteeringData.map((org, index) => {
            const IconComponent = org.icon as React.ElementType;
            return (
              <VolunteeringCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <OrganizationHeader>
                  <IconWrapper>
                    <IconComponent />
                  </IconWrapper>
                  <OrganizationInfo>
                    <OrganizationName>{org.organization}</OrganizationName>
                    <OrganizationAbbr>{org.abbreviation}</OrganizationAbbr>
                  </OrganizationInfo>
                </OrganizationHeader>
                
                <PositionsList>
                  {org.positions.map((position, posIndex) => (
                    <Position key={posIndex}>
                      <PositionTitle>{position.title}</PositionTitle>
                      <PositionDuration>
                        <FiCalendar />
                        {position.duration}
                      </PositionDuration>
                    </Position>
                  ))}
                </PositionsList>
              </VolunteeringCard>
            );
          })}
        </VolunteeringGrid>
      </Container>
    </VolunteeringSection>
  );
};

export default Volunteering;