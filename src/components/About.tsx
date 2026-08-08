import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Brain, Database, Cpu } from 'lucide-react';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Columns = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

const Intro = styled.div`
  flex: 1;
  max-width: 24rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: none;
  }
`;

const IntroTitle = styled(SectionTitle)`
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 0.8125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardList = styled(motion.div)`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
`;

const CapabilityCard = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1rem;
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 2.25rem;
  height: 2.25rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const CardTitle = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;
`;

const CardText = styled.div`
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const About: React.FC = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: Brain,
      title: 'Agentic AI & Voice',
      text: 'LangGraph ReAct agents across messaging channels, real-time voice agents on LiveKit/WebRTC, and Tunisian-dialect TTS/STT with zero-shot voice cloning.'
    },
    {
      icon: Database,
      title: 'RAG & Retrieval',
      text: 'Production RAG pipelines on ChromaDB and pgvector  semantic chunking, cross-lingual retrieval, reranking and tenant-scoped filtering.'
    },
    {
      icon: Cpu,
      title: 'LLM Ops & Inference',
      text: 'Distributed vLLM and Ray deployments on OVHCloud, GPU benchmarking across H100/A100 architectures, custom chat templates and self-hosted serving.'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Section id="about" $surface $borderTop>
      <Container>
        <Columns>
          <Intro>
            <Kicker>About</Kicker>
            <IntroTitle {...fadeUp}>{t('about.title')}</IntroTitle>
            <IntroText>{t('about.content')}</IntroText>
            <IntroText>
              Based in Sfax, Tunisia  currently AI Engineer at Quicky Prime,
              leading AI across three SaaS products: Sawti.tn, Audixy.fr and
              Confirmify.site.
            </IntroText>
          </Intro>

          <CardList
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {capabilities.map(cap => {
              const Icon = cap.icon;
              return (
                <CapabilityCard key={cap.title} variants={itemVariants}>
                  <IconBox>
                    <Icon size={18} />
                  </IconBox>
                  <div>
                    <CardTitle>{cap.title}</CardTitle>
                    <CardText>{cap.text}</CardText>
                  </div>
                </CapabilityCard>
              );
            })}
          </CardList>
        </Columns>
      </Container>
    </Section>
  );
};

export default About;
