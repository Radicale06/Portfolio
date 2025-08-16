import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar } from 'react-icons/fi';
import { BsTrophy, BsAward } from 'react-icons/bs';
import { AiOutlineTrophy } from 'react-icons/ai';

const HonorsSection = styled.section`
  padding: 5rem 0;
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

const HonorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const HonorCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
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

const HonorHeader = styled.div`
  display: flex;
  align-items: flex-start;
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
  flex-shrink: 0;
`;

const HonorInfo = styled.div`
  flex: 1;
`;

const HonorTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;

const Organization = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DateRange = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  svg {
    font-size: 14px;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;

const HonorsAwards: React.FC = () => {
  const { t } = useTranslation();

  const honorsData = [
    {
      title: "Best IoT Project Award",
      organization: "Technopole Sfax, IEEE Tunisian Section, and University of Sfax",
      date: "2024",
      description: "Awarded for outstanding innovation in Internet of Things technology",
      icon: BsTrophy
    },
    {
      title: "2nd Place - PYFAC9 Competition",
      organization: "PYFAC and Primatec",
      date: "2024",
      description: "Achieved second place in AI in the Automotive Field competition",
      icon: BsAward
    },
    {
      title: "2nd Place - Local Solution Challenge",
      organization: "Google",
      date: "2024",
      description: "Runner-up in Google's competition for innovative local solutions",
      icon: AiOutlineTrophy
    },
    {
      title: "Mentor at MASTER-FASTER",
      organization: "Data Science Competition",
      date: "2024",
      description: "Selected as a mentor to guide participants in a prestigious data science competition",
      icon: BsAward
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
    <HonorsSection id="honors">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('honors.title')}
        </Title>

        <HonorsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {honorsData.map((honor, index) => {
            const IconComponent = honor.icon as React.ElementType;
            return (
              <HonorCard
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <HonorHeader>
                  <IconWrapper>
                    <IconComponent />
                  </IconWrapper>
                  <HonorInfo>
                    <HonorTitle>{honor.title}</HonorTitle>
                    <Organization>{honor.organization}</Organization>
                    <DateRange>
                      <FiCalendar />
                      {honor.date}
                    </DateRange>
                  </HonorInfo>
                </HonorHeader>
                <Description>{honor.description}</Description>
              </HonorCard>
            );
          })}
        </HonorsGrid>
      </Container>
    </HonorsSection>
  );
};

export default HonorsAwards;