import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section, Container, Kicker, fadeUp } from '../styles/Shared';

const ChipRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 0.375rem 0.75rem;
`;

const ChipName = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const ChipTag = styled.span`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

interface SkillChip {
  name: string;
  tag: string;
}

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills: SkillChip[] = [
    { name: 'Python', tag: 'Language' },
    { name: 'TypeScript', tag: 'Language' },
    { name: 'SQL', tag: 'Data' },
    { name: 'LLMs', tag: 'AI' },
    { name: 'RAG', tag: 'Architecture' },
    { name: 'LangChain', tag: 'Agents' },
    { name: 'LangGraph', tag: 'Agents' },
    { name: 'OpenAI', tag: 'API' },
    { name: 'Hugging Face', tag: 'Models' },
    { name: 'vLLM', tag: 'LLM Ops' },
    { name: 'Triton Inference Server', tag: 'LLM Ops' },
    { name: 'Ray Clusters', tag: 'Distributed' },
    { name: 'TTS', tag: 'Speech' },
    { name: 'STT', tag: 'Speech' },
    { name: 'LiveKit', tag: 'Voice' },
    { name: 'WebRTC', tag: 'Real-time' },
    { name: 'ChromaDB', tag: 'Vector DB' },
    { name: 'Chonkie', tag: 'RAG' },
    { name: 'Web Scraping', tag: 'Data' },
    { name: 'YOLO', tag: 'Vision' },
    { name: 'AutoKeras', tag: 'AutoML' },
    { name: 'LazyPredict', tag: 'AutoML' },
    { name: 'FastAPI', tag: 'Backend' },
    { name: 'Django', tag: 'Backend' },
    { name: 'Celery', tag: 'Backend' },
    { name: 'Supabase', tag: 'Backend' },
    { name: 'n8n', tag: 'Automation' },
    { name: 'Docker', tag: 'Infra' },
    { name: 'OVHCloud', tag: 'Cloud' }
  ];

  return (
    <Section id="skills" $surface $borderTop $borderBottom>
      <Container>
        <Kicker>{t('skills.title')}</Kicker>
        <ChipRow {...fadeUp}>
          {skills.map(skill => (
            <Chip key={skill.name}>
              <ChipName>{skill.name}</ChipName>
              <ChipTag>{skill.tag}</ChipTag>
            </Chip>
          ))}
        </ChipRow>
      </Container>
    </Section>
  );
};

export default Skills;
