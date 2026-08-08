import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Header = styled.div`
  margin-bottom: 2.5rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimelineRow = styled(motion.div)`
  display: flex;
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1.25rem;
  }
`;

const Rail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1.25rem;
  flex-shrink: 0;
  padding-top: 0.25rem;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 2px solid ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
`;

const Line = styled.div`
  width: 1px;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.border};
  margin-top: 0.25rem;
`;

const Entry = styled.div`
  flex: 1;
  padding-bottom: 2.5rem;
`;

const EntryHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const RoleTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  margin-left: 0.5rem;

  &[href]:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 0.5rem;
  }
`;

const CurrentBadge = styled.span`
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  border-radius: 32px;
  padding: 0.125rem 0.625rem;
  margin-left: 0.625rem;
  vertical-align: middle;

  [dir='rtl'] & {
    margin-left: 0;
    margin-right: 0.625rem;
  }
`;

const EntryMeta = styled.div`
  text-align: right;
  flex-shrink: 0;
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  div:first-child {
    font-weight: 500;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: left;
  }

  [dir='rtl'] & {
    text-align: left;
  }
`;

const Bullets = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-top: 0.75rem;
`;

const Bullet = styled.li`
  display: flex;
  gap: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};

  &::before {
    content: '▸';
    color: ${({ theme }) => theme.colors.accent};
    flex-shrink: 0;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;
  }
`;

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  duration: string;
  current?: boolean;
  description: { lead?: string; text: string }[];
}

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences: ExperienceItem[] = [
    {
      title: 'AI Engineer',
      company: 'Quicky Prime',
      location: 'Full-time · Remote',
      duration: 'Dec 2025  Present',
      current: true,
      description: [
        {
          text: 'Lead AI engineer across three SaaS products:'
        },
        {
          lead: 'Sawti.tn',
          text: 'Self-hosted multimodal AI platform for Tunisian creators  trained and deployed the first Tunisian-dialect TTS and STT models with zero-shot voice cloning, plus Image and Video Studios.'
        },
        {
          lead: 'Audixy.fr',
          text: 'Multi-tenant conversational AI across 5 channels  LangGraph agents, real-time voice agents on self-hosted LiveKit, and a full RAG pipeline on pgvector.'
        },
        {
          lead: 'Confirmify.site',
          text: 'COD order-confirmation platform  AI calling agents that phone customers plus WhatsApp agents, integrated with Shopify, TikTok, Snapchat and Instagram.'
        }
      ]
    },
    {
      title: 'AI Engineer',
      company: 'Access International',
      companyUrl: 'https://www.linkedin.com/company/access-inter/posts/?feedView=all',
      location: 'Freelance · Remote',
      duration: 'Jun 2025  Jul 2025',
      description: [
        { text: 'Engineered a sport reservation platform using React and FastAPI.' },
        { text: 'Architected an intelligent WhatsApp AI booking assistant using n8n and OpenAI.' }
      ]
    },
    {
      title: 'AI Engineer',
      company: 'Favizone',
      companyUrl: 'https://favizone.com',
      location: 'Freelance · Remote',
      duration: 'Apr 2025  May 2025',
      description: [
        { text: 'Led deployment and optimization of LLMs (Mistral-8x7B, Llama-70B) with vLLM  GPU memory management and tensor parallelism for high-throughput inference.' },
        { text: 'Architected Ray clusters on OVHCloud for distributed inference and horizontal scaling across multi-node architectures.' },
        { text: 'Benchmarked diverse GPU architectures (H100, A100, A10, Tesla), optimizing throughput, response times and maximum concurrent user capacity.' },
        { text: 'Integrated JAIS-family models into the inference pipeline with custom chat templates and tokenizer configurations for full vLLM compatibility.' }
      ]
    },
    {
      title: 'AI Engineer Intern',
      company: 'Access International',
      companyUrl: 'https://www.linkedin.com/company/access-inter/posts/?feedView=all',
      location: 'Tunis, Tunisia',
      duration: 'Feb 2025  Jul 2025',
      description: [
        { text: 'Architected an AI platform that democratizes chatbot creation, letting non-technical users deploy production-ready conversational agents.' },
        { text: 'Engineered an isolated RAG architecture on ChromaDB  semantic chunking for documents, row-based chunking for tabular data, intelligent vector deduplication.' },
        { text: 'Orchestrated LLM deployments on 160GB-VRAM infrastructure, serving Mistral-Small-24B (EN/FR with function calling) and Cohere Command-R7B (Arabic) via vLLM.' },
        { text: 'Built an asynchronous ingestion pipeline with Celery and Selenium Grid, supporting automated web scraping across 7 data formats and database connectors.' },
        { text: 'Designed a containerized microservices stack  React frontend, Django REST backend, automated COSTAR prompt engineering and real-time conversation analytics.' }
      ]
    },
    {
      title: 'AI Engineer Intern',
      company: 'Yuma Tunisia',
      location: 'Sfax, Tunisia',
      duration: 'Jul 2024  Aug 2024',
      description: [
        { text: 'Engineered a full-stack ML Model Generator tool with FastAPI and React  automated model recommendations, dataset uploads and training pipelines.' },
        { text: 'Integrated LazyPredict with automated hyperparameter optimization to evaluate, fine-tune and recommend the best-fitting ML algorithms per dataset.' },
        { text: 'Added computer-vision capabilities with YOLO and AutoKeras for training custom image-classification models from the web interface.' },
        { text: 'Designed a validation interface with evaluation metrics, side-by-side comparisons and a real-time inference testing section.' }
      ]
    },
    {
      title: 'Mobile Developer Intern',
      company: 'CompiTechnology',
      companyUrl: 'https://www.linkedin.com/company/compitechnology/',
      location: 'Sfax, Tunisia',
      duration: 'Jul 2023  Aug 2023',
      description: [
        { text: 'Engineered a cross-platform mobile monitoring and alerting app for a Canadian startup using Flutter and Dart.' },
        { text: 'Translated startup objectives into high-fidelity UI/UX concepts with Figma.' },
        { text: 'Architected a real-time Firebase backend  push notifications, live data sync and secure authentication.' }
      ]
    }
  ];

  return (
    <Section id="experience">
      <Container>
        <Header>
          <Kicker>Experience</Kicker>
          <SectionTitle {...fadeUp}>{t('experience.title')}</SectionTitle>
        </Header>

        <Timeline>
          {experiences.map((exp, index) => (
            <TimelineRow
              key={`${exp.company}-${exp.duration}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
            >
              <Rail>
                <Dot />
                {index < experiences.length - 1 && <Line />}
              </Rail>
              <Entry>
                <EntryHeader>
                  <div>
                    <RoleTitle>{exp.title}</RoleTitle>
                    <Company
                      href={exp.companyUrl}
                      target={exp.companyUrl ? '_blank' : undefined}
                      rel={exp.companyUrl ? 'noopener noreferrer' : undefined}
                      as={exp.companyUrl ? 'a' : 'span'}
                    >
                      @ {exp.company}
                    </Company>
                    {exp.current && (
                      <CurrentBadge>{t('experience.current')}</CurrentBadge>
                    )}
                  </div>
                  <EntryMeta>
                    <div>{exp.duration}</div>
                    <div>{exp.location}</div>
                  </EntryMeta>
                </EntryHeader>
                <Bullets>
                  {exp.description.map((item, i) => (
                    <Bullet key={i}>
                      <span>
                        {item.lead && <strong>{item.lead}  </strong>}
                        {item.text}
                      </span>
                    </Bullet>
                  ))}
                </Bullets>
              </Entry>
            </TimelineRow>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Experience;
