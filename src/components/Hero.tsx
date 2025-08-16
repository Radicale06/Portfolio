import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
    order: 2;
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 250px;
    order: 1;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  padding: 4px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 250px;
    height: 250px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfilePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  z-index: 2;
  border: 3px dashed ${({ theme }) => theme.colors.border};
`;

const Greeting = styled(motion.p)`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Name = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  font-weight: 600;
  min-height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypingCursor = styled(motion.span)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  line-height: 1.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(motion.a)<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  background: ${({ primary, theme }) => 
    primary ? theme.colors.gradient : 'transparent'};
  color: ${({ primary, theme }) => 
    primary ? '#ffffff' : theme.colors.primary};
  border: 2px solid ${({ primary, theme }) => 
    primary ? 'transparent' : theme.colors.primary};
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 35px rgba(0,0,0,0.25);
    ${({ primary, theme }) => !primary && `
      background: ${theme.colors.primary};
      color: white;
    `}

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(3px);
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.01);
  }

  svg {
    font-size: 1.25rem;
    transition: transform 0.3s ease;
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  opacity: 0.9;
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}40;
  z-index: 1;
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const roles = useMemo(() => [
    'AI Engineer & Data Engineer',
    'Data Scientist',
  ], []);

  useEffect(() => {
    let isMounted = true;
    let charIndex = 0;
    let isDeleting = false;
    const currentRole = roles[currentRoleIndex];

    function type() {
      if (!isMounted) return;
      
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex++;
        
        if (charIndex > currentRole.length) {
          setTimeout(() => {
            if (isMounted) {
              isDeleting = true;
              type();
            }
          }, 2000);
          return;
        }
        
        setTimeout(() => {
          if (isMounted) type();
        }, 100);
      } else {
        setTypedText(currentRole.substring(0, charIndex));
        charIndex--;
        
        if (charIndex < 0) {
          isDeleting = false;
          charIndex = 0;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTimeout(() => {
            if (isMounted) type();
          }, 500);
          return;
        }
        
        setTimeout(() => {
          if (isMounted) type();
        }, 50);
      }
    }

    const timeout = setTimeout(() => {
      if (isMounted) type();
    }, 500);

    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [currentRoleIndex, roles]);


  const particles = useMemo(() => Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 80 + 10, // Keep particles away from edges
    y: Math.random() * 80 + 10,
    duration: 6 + Math.random() * 10,
    size: 6 + Math.random() * 4
  })), []);

  return (
    <HeroSection id="home">
      <BackgroundAnimation>
        {particles.map(particle => (
          <Particle
            key={particle.id}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2
            }}
          />
        ))}
      </BackgroundAnimation>

      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Greeting
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {t('hero.greeting')}
            </Greeting>
            
            <Name
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t('hero.name')}
            </Name>
            
            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {typedText}
              <TypingCursor
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                |
              </TypingCursor>
            </Title>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {t('hero.subtitle')}
            </Subtitle>
            
            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
            <Button
              href={`${process.env.PUBLIC_URL}/Oussama_Resume.pdf`}
              download
              primary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload />
              {t('hero.downloadResume')}
            </Button>
            
            <Button
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowRight />
              {t('hero.contactMe')}
            </Button>
          </ButtonGroup>
          </motion.div>
        </HeroContent>

        <HeroImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <ProfileImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Replace the src with your actual photo path */}
            {true ? (
              <ProfileImg 
                src={`${process.env.PUBLIC_URL}/images/projects/Graduation.jpg`} 
                alt="Oussama Chaabene"
                onError={(e) => {
                  // Hide image if it fails to load
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            ) : (
              <ProfilePlaceholder>
                📷
              </ProfilePlaceholder>
            )}
          </ProfileImage>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;