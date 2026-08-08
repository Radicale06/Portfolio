import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, ArrowUpRight, Star } from 'lucide-react';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const GithubProfileLink = styled.a`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const MoreProjects = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.accent};
    margin-left: 0.375rem;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Card = styled(motion.article)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.3s ease, transform 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const ImageWrap = styled.div`
  height: 11rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.muted};
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.04);
  }
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const PlaceholderInitials = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.accent};
`;

const PlaceholderStars = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.6875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryForeground};
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
`;

const Category = styled.span`
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: ${({ theme }) => theme.colors.accent};
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.text};
`;

const CardDescription = styled.p`
  font-size: 0.8125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TechChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

const TechChip = styled.span`
  font-size: 0.6875rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryForeground};
  border-radius: 4px;
  padding: 0.125rem 0.5rem;
`;

const RepoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

interface Project {
  title: string;
  initials: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  image?: string;
  stars?: number;
}

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      title: 'Substrate',
      initials: 'SB',
      category: 'RAG · Infrastructure',
      description:
        'The layer between the open web and your model  turns any URL or search query into clean, chunked, vectorized context. Self-hosted reader, web search, segmenter, embeddings, reranker and pgvector store; an open-source Jina AI alternative with no API keys.',
      tech: ['TypeScript', 'pgvector', 'Embeddings', 'Docker'],
      github: 'https://github.com/Radicale06/Substrate',
      stars: 6
    },
    {
      title: 'LinkPilot',
      initials: 'LP',
      category: 'Automation · Growth',
      description:
        'Autopilot for growing your LinkedIn network  collects profiles from a search and sends paced, capped connection requests through LinkedIn\'s own internal API, with human-like delays and duplicate protection.',
      tech: ['Node.js', 'Browser Automation', 'LinkedIn API'],
      github: 'https://github.com/Radicale06/linkpilot',
      stars: 3
    },
    {
      title: 'WhatsApp AI Agent',
      initials: 'WA',
      category: 'Agents · Messaging',
      description:
        'Multi-tenant WhatsApp chatbot supporting multiple Business accounts  a LangGraph agent with RAG knowledge-base retrieval, message queueing with fallback, and a NestJS backend behind Meta Cloud webhooks.',
      tech: ['FastAPI', 'LangGraph', 'RAG', 'WhatsApp API'],
      github: 'https://github.com/Radicale06/whatsapp-agent'
    },
    {
      title: 'AI Voice Cloning Studio',
      initials: 'VC',
      category: 'Voice AI · TTS',
      description:
        'Full-stack voice cloning platform  create a personalized voice model and generate natural speech from any text, with async processing for 100+ concurrent users, JWT auth and real-time queue monitoring.',
      tech: ['React', 'FastAPI', 'TTS', 'TypeScript'],
      github: 'https://github.com/Radicale06/voice-cloning'
    },
    {
      title: 'Qwen Reranker Service',
      initials: 'QR',
      category: 'LLM Ops · Retrieval',
      description:
        'Cross-encoder reranking service running Qwen3-Reranker-0.6B via llama.cpp  scores query-document relevance directly instead of embedding similarity, sharpening RAG retrieval quality.',
      tech: ['Python', 'llama.cpp', 'Qwen', 'Reranking'],
      github: 'https://github.com/Radicale06/Qwen-Reranker-llama-cpp'
    },
    {
      title: 'BotForge',
      initials: 'BF',
      category: 'LLM · RAG',
      description:
        'End-to-end platform democratizing AI chatbot creation  multi-tenant RAG on ChromaDB with semantic chunking and vector deduplication, serving Mistral-Small-24B and Cohere Command-R7B via vLLM.',
      tech: ['Django', 'ChromaDB', 'vLLM', 'Celery'],
      github: 'https://github.com/Radicale06/BotForge',
      image: '/images/projects/multitenant_rag.png'
    },
    {
      title: 'Sport Reservation Platform',
      initials: 'SR',
      category: 'Full-Stack · Automation',
      description:
        'Booking platform with user interface and back-office dashboard for facility management, plus a WhatsApp AI booking assistant built with n8n and OpenAI for direct reservations.',
      tech: ['React', 'FastAPI', 'n8n', 'OpenAI'],
      github: 'https://github.com/Radicale06/Reservation',
      image: '/images/projects/reservation_photo.png'
    },
    {
      title: 'EduQuest (Quizify)',
      initials: 'EQ',
      category: 'GenAI · EdTech',
      description:
        'AI-powered educational gamification platform  dynamic quiz generation adapted to the learner\'s level, personalized feedback and smart hints, with XP, badges, streaks and leaderboards.',
      tech: ['TypeScript', 'GenAI', 'Gamification'],
      github: 'https://github.com/Radicale06/Quizify'
    },
    {
      title: 'Order-Trade Reconciliation',
      initials: 'RC',
      category: 'GenAI · Finance',
      description:
        'GenAI proof of concept that reconciles order and trade records automatically with OpenAI models  matching, discrepancy detection and explanation generation over financial data.',
      tech: ['Python', 'OpenAI', 'GenAI'],
      github: 'https://github.com/Radicale06/Data-Reconciliation-PoC'
    },
    {
      title: 'Mental Health in the Workplace',
      initials: 'MH',
      category: 'Data Science · ML',
      description:
        'CRISP-DM data-mining study on 10,000 workplace mental-health survey rows  grounded feature engineering, Cramér\'s-V selection, four classifiers and a Gradio prototype; Gradient Boosting tops out at 0.70 accuracy.',
      tech: ['Python', 'Scikit-learn', 'Gradio', 'CRISP-DM'],
      github: 'https://github.com/Radicale06/Mental-Health-in-the-Workplace-2020-2024-'
    },
    {
      title: 'MLOps Pipeline',
      initials: 'ML',
      category: 'MLOps · CI/CD',
      description:
        'Complete MLOps pipeline with DagsHub data versioning, MLflow experiment tracking and Arize monitoring  FastAPI and Docker deployment, React dashboard, GitLab CI/CD automation.',
      tech: ['MLflow', 'DagsHub', 'FastAPI', 'Docker'],
      github: 'https://github.com/Radicale06/MLOps',
      image: '/images/projects/MLops.png'
    },
    {
      title: 'Arabic Sentiment Classifier',
      initials: 'SC',
      category: 'NLP · Deep Learning',
      description:
        'Classified Arabic YouTube comments into positive, negative and neutral categories, ranking videos by pleasantness using web scraping, NLTK and deep learning.',
      tech: ['NLP', 'NLTK', 'Deep Learning', 'Arabic NLP'],
      github: 'https://github.com/Radicale06/Comments_Classification',
      image: '/images/projects/sentiments.png'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <Section id="projects" $borderTop>
      <Container>
        <Header>
          <div>
            <Kicker>Featured Work</Kicker>
            <SectionTitle {...fadeUp}>{t('projects.title')}</SectionTitle>
          </div>
          <GithubProfileLink
            href="https://github.com/Radicale06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={14} />
            github.com/Radicale06
            <ArrowUpRight size={14} />
          </GithubProfileLink>
        </Header>

        <Grid
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map(project => (
            <Card key={project.title} variants={itemVariants}>
              <ImageWrap>
                {project.image ? (
                  <CardImg
                    src={`${process.env.PUBLIC_URL}${project.image}`}
                    alt={project.title}
                    loading="lazy"
                    onError={e => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <Placeholder aria-hidden="true">
                    <PlaceholderInitials>{project.initials}</PlaceholderInitials>
                    {project.stars ? (
                      <PlaceholderStars>
                        <Star size={11} />
                        {project.stars} stars
                      </PlaceholderStars>
                    ) : null}
                  </Placeholder>
                )}
              </ImageWrap>
              <CardBody>
                <Category>{project.category}</Category>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
                <CardFooter>
                  <TechChips>
                    {project.tech.map(tech => (
                      <TechChip key={tech}>{tech}</TechChip>
                    ))}
                  </TechChips>
                  <RepoLink
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                  >
                    <Github size={15} />
                    {t('projects.viewGithub')}
                  </RepoLink>
                </CardFooter>
              </CardBody>
            </Card>
          ))}
        </Grid>

        <MoreProjects>
          And more projects 
          <a
            href="https://github.com/Radicale06?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            check my GitHub
            <ArrowUpRight size={14} />
          </a>
        </MoreProjects>
      </Container>
    </Section>
  );
};

export default Projects;
