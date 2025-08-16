import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  text-align: center;
  padding: 2rem;
`;

const PlaceholderIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const PlaceholderText = styled.p`
  font-size: 0.875rem;
  opacity: 0.9;
  font-weight: 500;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    font-size: 1.25rem;
  }
`;

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Sport Reservation Platform",
      description: "Full-stack booking platform with user interface and back-office dashboard for facility management. Features WhatsApp Business integration using n8n workflow automation for direct reservations and secure SSL connectivity via ngrok.",
      tech: ["React", "Node.js", "NestJS", "n8n", "WhatsApp API", "SSL/ngrok", "JavaScript"],
      github: "https://github.com/Radicale06/Reservation",
      image: "/images/projects/reservation_photo.png",
      placeholder: "Sport Platform"
    },
    {
      title: "Automated Chatbots Creation platform",
      description: "End-to-end platform democratizing AI chatbot creation. Implemented multi-tenant RAG architecture with ChromaDB, intelligent deduplication, and support for 7+ data formats. Deployed Mistral-Small-24B and Cohere Command-R7B for multilingual interactions.",
      tech: ["Python", "Django", "React", "ChromaDB", "vLLM", "Ollama", "Celery", "Redis", "Docker", "Mistral AI", "Cohere AI" , "Selenium Grid"],
      github: "https://github.com/Radicale06/PFE",
      image: "/images/projects/multitenant_rag.png",
      placeholder: "AI RAG Platform"
    },
    {
      title: "Data Analytics Project",
      description: "Enterprise data analytics solution using Apache Kylin with OLAP capabilities. Integrated Apache Kafka for real-time data streaming and Apache Hive for data warehousing, enabling fast, complex analyses on massive datasets for valuable business intelligence insights.",
      tech: ["Apache Kylin", "Apache Kafka", "Apache Hive", "OLAP", "Big Data", "Business Intelligence"],
      github: "#",
      image: "/images/projects/analytics.png",
      placeholder: "Data Analytics"
    },
    {
      title: "MLOps Pipeline",
      description: "Complete MLOps pipeline leveraging DagsHub for data versioning, MLflow for experiment tracking, and Arize for monitoring. Implemented with pytest for reliability, FastAPI and Docker for scalable deployment, React dashboard for predictions, and GitLab CI/CD automation.",
      tech: ["Python", "MLflow", "DagsHub", "Arize", "FastAPI", "Docker", "React", "GitLab CI/CD", "pytest"],
      github: "https://github.com/Radicale06/MLOps",
      image: "/images/projects/MLops.png",
      placeholder: "MLOps Pipeline"
    },
    {
      title: "Blockchain Document Certifier",
      description: "Blockchain-based application to certify and verify document integrity by generating unique fingerprints stored on the blockchain. Ensures documents remain unaltered by comparing current fingerprints with the original, immediately detecting any tampering.",
      tech: ["Blockchain", "Smart Contracts", "React", "Node.js", "Cryptography", "Web3"],
      github: "https://github.com/Radicale06/Blockchain_Project",
      image: "/images/projects/blockchain.png",
      placeholder: "Blockchain App"
    },
    {
      title: "MediReport AI",
      description: "Healthcare chatbot serving as a knowledgeable medical assistant. Utilizes fine-tuned LLaMA model for accurate responses, Flask API for backend functionality, and React interface for user-friendly support, ensuring clear and reliable healthcare communication.",
      tech: ["Python", "LLaMA", "Flask", "React", "NLP", "Fine-tuning", "Healthcare AI"],
      github: "",
      image: "/images/projects/medical_report.png",
      placeholder: "Healthcare AI"
    },
    {
      title: "Real-time Log Analysis System",
      description: "Real-time data stream processing system for log analysis using Spark and Kafka, managed with YARN and deployed on Linux environments via VirtualBox. Features PySpark analysis and Chart.js visualization for comprehensive log monitoring.",
      tech: ["Apache Spark", "Kafka", "PySpark", "YARN", "Chart.js", "Linux", "VirtualBox"],
      github: "#",
      image: "/images/projects/analysis.png",
      placeholder: "Log Analysis"
    },
    {
      title: "Automated Infrastructure",
      description: "Configured automation infrastructure with Kubernetes for orchestration, Nexus for repository management, and Jenkins for CI/CD. Utilized Vagrant and VirtualBox for development environments with GitLab integration.",
      tech: ["Kubernetes", "Jenkins", "Nexus", "Vagrant", "VirtualBox", "Linux", "GitLab", "IaC"],
      github: "#",
      image: "/images/projects/Automated_Infrastructure.png",
      placeholder: "DevOps Infrastructure"
    },
    {
      title: "YouTube Sentiment Classifier",
      description: "Classified Arabic YouTube comments into positive, negative, and neutral categories. Evaluated videos for pleasantness and ranked them using web scraping, NLP, NLTK, vectorizing, and deep learning techniques.",
      tech: ["Python", "NLP", "NLTK", "Web Scraping", "Machine Learning", "Deep Learning", "Arabic NLP"],
      github: "https://github.com/Radicale06/Comments_Classification",
      image: "/images/projects/sentiments.png",
      placeholder: "NLP Sentiment Analysis"
    },
    {
      title: "ELK Log Monitoring System",
      description: "Deployed and configured ELK stack with Filebeat and Redis for real-time log collection. Improved troubleshooting efficiency by 40% and streamlined incident response times across the operations team.",
      tech: ["Elasticsearch", "Logstash", "Kibana", "Filebeat", "Redis", "DevOps", "Monitoring"],
      github: "#",
      image: "/images/projects/elk_logs.png",
      placeholder: "ELK Monitoring"
    },
    {
      title: "Pneumonia Detection",
      description: "Detected pneumonia in X-ray images using deep learning. Built CNNs from scratch and utilized pre-trained models like VGG16 and MobileNetV2 with transfer learning and freezing strategies for medical image analysis.",
      tech: ["Python", "TensorFlow", "Keras", "CNN", "VGG16", "MobileNetV2", "Medical Imaging"],
      github: "#",
      image: "/images/projects/pneumia.png",
      placeholder: "Medical AI Detection"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <ProjectsSection id="projects">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('projects.title')}
        </Title>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <ProjectImg 
                  src={`${process.env.PUBLIC_URL}${project.image}`} 
                  alt={project.title}
                  onError={(e) => {
                    // Hide image and show placeholder if image fails to load
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                    const placeholder = img.nextElementSibling as HTMLElement;
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <ProjectPlaceholder style={{ display: 'none' }}>
                  <PlaceholderIcon>🖼️</PlaceholderIcon>
                  <PlaceholderText>{project.placeholder}</PlaceholderText>
                </ProjectPlaceholder>
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.tech.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                    {t('projects.viewGithub')}
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;