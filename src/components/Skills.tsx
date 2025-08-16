import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  SiPython, SiDjango, SiFastapi, SiFlask, SiJavascript, SiReact, 
  SiDocker, SiKubernetes, SiGit, SiLinux, SiApachespark, SiApachekafka,
  SiRedis, SiTensorflow
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { AiOutlineRobot, AiOutlineCode, AiOutlineEye, AiOutlineLineChart } from 'react-icons/ai';
import { BsGearFill, BsServer, BsGraphUp } from 'react-icons/bs';
import { DiMysql } from 'react-icons/di';
import { MdOutlineScience } from 'react-icons/md';

const SkillsSection = styled.section`
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
`;

const SkillsContainer = styled.div`
  display: grid;
  gap: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.colors.primary}10;
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const SkillName = styled.p`
  font-size: 0.875rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

interface Skill {
  name: string;
  icon: any;
}


const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Programming Languages & Frameworks",
      skills: [
        { name: 'Python', icon: SiPython },
        { name: 'Django', icon: SiDjango },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'Flask', icon: SiFlask },
        { name: 'Java', icon: FaJava },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'C', icon: AiOutlineCode },
      ]
    },
    {
      title: "AI & Machine Learning",
      skills: [
        
        {name: 'Tensorflow', icon: SiTensorflow },
        {name: 'Pytorch', icon: AiOutlineRobot },
        { name: 'Deep Learning', icon: AiOutlineRobot },
        { name: 'Machine Learning', icon: AiOutlineRobot },
        { name: 'Data Science', icon: MdOutlineScience },
        { name: 'Data Analysis', icon: AiOutlineLineChart },
        { name: 'Data Visualization', icon: BsGraphUp },
        { name: 'NLP', icon: AiOutlineRobot },
        { name: 'VectorDB\'s', icon: FaDatabase },
        { name: 'RAG', icon: AiOutlineRobot },
        { name: 'LLM', icon: AiOutlineRobot },
        { name: 'Computer Vision', icon: AiOutlineEye },
        { name: 'N8N', icon: AiOutlineRobot },
        { name: 'VLLM', icon: AiOutlineRobot },
        { name: 'Ollama', icon: AiOutlineRobot },
      ]
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        { name: 'SQL', icon: DiMysql },
        { name: 'IaC', icon: AiOutlineCode },
        { name: 'Git', icon: SiGit },
        { name: 'Linux', icon: SiLinux },
        { name: 'Docker', icon: SiDocker },
        { name: 'Kubernetes', icon: SiKubernetes },
      ]
    },
    {
      title: "Big Data & Processing",
      skills: [
        { name: 'Hadoop', icon: BsServer },
        { name: 'Spark', icon: SiApachespark },
        { name: 'Zookeeper', icon: BsGearFill },
        { name: 'Hive', icon: FaDatabase },
        { name: 'Kafka', icon: SiApachekafka },
        { name: 'HBase', icon: FaDatabase },
        { name: 'Redis', icon: SiRedis },
        { name: 'Celery', icon: BsGearFill },
      ]
    }
  ];



  return (
    <SkillsSection id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('skills.title')}
        </Title>

        <SkillsContainer>
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <SkillsGrid>
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon as React.ElementType;
                  return (
                    <SkillCard
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon><IconComponent /></SkillIcon>
                      <SkillName>{skill.name}</SkillName>
                    </SkillCard>
                  );
                })}
              </SkillsGrid>
            </SkillCategory>
          ))}
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;