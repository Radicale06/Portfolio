import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiMapPin, FiBook } from 'react-icons/fi';

const EducationSection = styled.section`
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
`;

const EducationGrid = styled(motion.div)`
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const EducationCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 2rem;
  align-items: start;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
    transform: rotate(45deg);
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    animation: shimmer 1.5s ease-in-out;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }
`;

const EducationContent = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Institution = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FieldOfStudy = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const AwardsSection = styled(motion.div)`
  margin-top: 4rem;
`;

const AwardsTitle = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
`;

const AwardCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background};
  padding: 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const AwardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const AwardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const AwardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
`;

const Education: React.FC = () => {
  const { t } = useTranslation();

  const getCustomIcon = (type: string) => {
    const iconStyle = { width: '24px', height: '24px', fill: 'currentColor' };
    
    switch (type) {
      case 'engineering':
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M12 2l8 4v4c0 6-4 10-8 12-4-2-8-6-8-12V6l8-4z" fill="rgba(255,255,255,0.9)"/>
            <path d="M9 9h6l-2 6h-2l-2-6z" fill="rgba(0,0,0,0.3)"/>
            <circle cx="12" cy="8" r="1.5" fill="rgba(0,0,0,0.4)"/>
            <path d="M8 16h8M8 18h8" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5"/>
            <polygon points="10,11 14,11 13,13 11,13" fill="rgba(255,215,0,0.8)"/>
          </svg>
        );
      case 'preparatory':
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M12 2L2 8v8c0 1 0 2 0 3 0 1 1 1 2 1h16c1 0 2 0 2-1 0-1 0-2 0-3V8L12 2z" fill="rgba(255,255,255,0.9)"/>
            <path d="M6 10h12v2H6v-2z" fill="rgba(0,100,200,0.7)"/>
            <path d="M8 13h8v1H8v-1z" fill="rgba(0,100,200,0.5)"/>
            <path d="M10 15h4v1h-4v-1z" fill="rgba(0,100,200,0.3)"/>
            <circle cx="12" cy="6" r="1.5" fill="rgba(255,215,0,0.9)"/>
            <path d="M9 8h6l-1 1H10l-1-1z" fill="rgba(0,150,255,0.6)"/>
          </svg>
        );
      case 'baccalaureate':
        return (
          <svg viewBox="0 0 24 24" style={iconStyle}>
            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z"/>
            <path d="M12 6.5v13c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05" stroke="rgba(255,255,255,0.8)" strokeWidth="1" fill="none"/>
            <circle cx="8" cy="10" r="1.5" fill="rgba(255,255,255,0.9)"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const education = [
    {
      degree: "Engineering Degree",
      institution: "Faculty Of Sciences Of Sfax",
      field: "Data Engineering",
      duration: "15/09/2022 – 02/07/2025",
      location: "Sfax, Tunisia",
      iconType: "engineering"
    },
    {
      degree: "Integrated Preparatory",
      institution: "Faculty Of Sciences Of Sfax",
      field: "Math, Physics and Computer Science",
      duration: "15/09/2020 – 31/05/2022",
      location: "Sfax, Tunisia",
      iconType: "preparatory"
    },
    {
      degree: "Baccalaureate",
      institution: "Ibn Khaldun High School Mettouia",
      field: "Technology",
      duration: "15/09/2016 – 15/06/2020",
      location: "Gabes, Tunisia",
      iconType: "baccalaureate"
    }
  ];

  const awards = [
    {
      title: "Best IoT Project",
      description: "Awarded by Technopole Sfax, IEEE Tunisian Section, and University of Sfax",
      icon: "🏆"
    },
    {
      title: "2nd Place PYFAC9 Competition",
      description: "AI in the Automotive Field, organized by PYFAC and Primatec",
      icon: "🥈"
    },
    {
      title: "2nd Place Local Solution Challenge",
      description: "By Google",
      icon: "🥈"
    },
    {
      title: "Best Mentor at MASTER-FASTER",
      description: "A Data Science Competition",
      icon: "👨‍🏫"
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
    <EducationSection id="education">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('education.title')}
        </Title>

        <EducationGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <IconWrapper>
                {getCustomIcon(edu.iconType)}
              </IconWrapper>
              <EducationContent>
                <Degree>{edu.degree}</Degree>
                <Institution>{edu.institution}</Institution>
                <MetaInfo>
                  <MetaItem>
                    <FiCalendar />
                    {edu.duration}
                  </MetaItem>
                  <MetaItem>
                    <FiMapPin />
                    {edu.location}
                  </MetaItem>
                </MetaInfo>
                <FieldOfStudy>
                  <strong>{t('education.field')}:</strong> {edu.field}
                </FieldOfStudy>
              </EducationContent>
            </EducationCard>
          ))}
        </EducationGrid>

      </Container>
    </EducationSection>
  );
};

export default Education;