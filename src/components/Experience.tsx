import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const ExperienceSection = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 50px;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    width: 2px;
    height: 100%;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const TimelineItem = styled(motion.div)<{ align: 'left' | 'right' }>`
  position: relative;
  width: 100%;
  padding: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-left: 70px;
    padding-right: 2rem;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border: 4px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  top: 2rem;
  left: -20px;
  transform: translateX(-50%);
  ${({ theme }) => `
    box-shadow: 0 0 0 4px ${theme.colors.primary}20;
  `}
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const JobTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

const Company = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const CompanyName = styled.h4`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.125rem;
`;

const CompanyLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
`;

const YearPeriodLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const YearBadge = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.75rem;
`;

const PeriodText = styled.span`
  font-weight: 500;
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

const Description = styled.ul`
  list-style: none;
  margin-top: 1rem;
`;

const DescriptionItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.8;
  font-size: 1rem;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: "AI Software Engineer",
      company: "ACCESS International",
      companyUrl: "https://www.linkedin.com/company/access-inter/posts/?feedView=all",
      location: "Tunis, Tunisia",
      duration: "01/06/2025 – 30/06/2025",
      year: "2025",
      current: false,
      description: [
        "Built full-stack booking platform with user interface and back-office dashboard for facility management and real-time scheduling",
        "Developed conversational booking agent using n8n workflow automation for direct WhatsApp reservations",
        "Configured secure connections using ngrok for SSL termination and WhatsApp webhook integration"
      ]
    },
    {
      title: "AI Engineer",
      company: "Favizone",
      companyUrl: "https://favizone.com",
      location: "Tunis, Tunisia",
      duration: "01/05/2025 – 31/05/2025",
      year: "2025",
      description: [
        "Deployed and optimized large language models (Mistral-8x7B, Llama-70B) using vLLM framework with GPU memory management",
        "Conducted performance benchmarking measuring token throughput, latency, and concurrent user capacity (5-20 users)",
        "Performed systematic comparison testing on NVIDIA configurations (H100, A10, A100, Tesla series on OVHCloud)",
        "Developed chat templates and tokenizer configurations for non-supported models (JAIS family)",
        "Built automated performance monitoring systems tracking tokens/second, memory usage, and real-time scaling metrics"
      ]
    },
    {
      title: "AI Software Engineer Intern",
      company: "ACCESS International",
      companyUrl: "https://www.linkedin.com/company/access-inter/posts/?feedView=all",
      location: "Tunis, Tunisia",
      duration: "03/02/2025 – 31/05/2025",
      year: "2025",
      description: [
        "Developed end-to-end platform democratizing AI chatbot creation for non-technical users",
        "Implemented Multi-Tenant RAG Architecture with ChromaDB, metadata filtering, and intelligent deduplication",
        "Deployed Mistral-Small-24B for English/French interactions and Cohere Command-R7B for Arabic using vLLM",
        "Built Celery orchestrated ingestion supporting 7 formats, web scrapping via Selenium Grid",
        "Created React frontend with responsive UI and Django REST backend"
      ]
    },
    {
      title: "AI Engineer Intern",
      company: "Freedom Of Dev",
      companyUrl: "https://www.freedomofdev.com/en/homepage/",
      location: "Sfax, Tunisia",
      duration: "01/07/2024 – 31/08/2024",
      year: "2024",
      description: [
        "Developed a tool recommending ML models based on user input",
        "Integrated ReactJS frontend and Django backend for file uploads and model generation",
        "Used YOLO and AutoKeras for image classification and user model training",
        "Provided model evaluation metrics and comparisons in a simple format"
      ]
    },
    {
      title: "Mobile Developer Intern",
      company: "CompiTechnolgy",
      companyUrl: "https://www.linkedin.com/company/compitechnology/",
      location: "Sfax, Tunisia",
      duration: "01/07/2023 – 15/09/2023",
      year: "2023",
      description: [
        "Developed a mobile app prototype for a Canadian startup using Flutter",
        "Aligned the prototype with the startup's goals using Figma for UI/UX designs",
        "Utilized Android Studio for development and debugging",
        "Integrated Firebase for backend functionality and real-time updates"
      ]
    },
    {
      title: "Data Entry Intern",
      company: "IBeForum",
      companyUrl: "https://www.linkedin.com/company/ibeforum/",
      location: "Remote / Bengaluru, India",
      duration: "01/06/2022 – 31/08/2022",
      year: "2022",
      description: [
        "Actively engaged in data collection, using various techniques to gather information supporting organizational objectives",
        "Leveraged Googling and web-based tools to collect pertinent data effectively"
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('experience.title')}
        </Title>

        <Timeline>

          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              align="left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot />
              <Card>
                <YearPeriodLine>
                  <YearBadge>{exp.year}</YearBadge>
                  <PeriodText>{exp.duration}</PeriodText>
                </YearPeriodLine>
                <JobTitle>{exp.title}</JobTitle>
                <Company>
                  <CompanyName>{exp.company}</CompanyName>
                  {exp.companyUrl && (
                    <CompanyLink href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink />
                    </CompanyLink>
                  )}
                </Company>
                <MetaInfo>
                  <MetaItem>
                    <FiMapPin />
                    {exp.location}
                  </MetaItem>
                  {exp.current && (
                    <MetaItem>
                      <span style={{ color: '#10b981', fontWeight: 'bold' }}>
                        {t('experience.current')}
                      </span>
                    </MetaItem>
                  )}
                </MetaInfo>
                <Description>
                  {exp.description.map((item, i) => (
                    <DescriptionItem key={i}>{item}</DescriptionItem>
                  ))}
                </Description>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;