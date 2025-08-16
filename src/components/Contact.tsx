import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactSection = styled.section`
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled(motion.h2)`
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
`;

const ContactGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ContactContent = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.25rem;
`;

const ContactValue = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactForm = styled(motion.form)`
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)<{ type: 'success' | 'error' }>`
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  background: ${({ theme, type }) => 
    type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  color: ${({ theme, type }) => 
    type === 'success' ? '#22c55e' : '#ef4444'};
  border: 1px solid ${({ type }) => 
    type === 'success' ? '#22c55e' : '#ef4444'};
`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: FiMail,
      label: t('contact.email'),
      value: "chaabaneoussama@fss.u-sfax.tn",
      href: "mailto:chaabaneoussama@fss.u-sfax.tn"
    },
    {
      icon: FiPhone,
      label: t('contact.phone'),
      value: "+216 27916977",
      href: "tel:+21627916977"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+216 27916977",
      href: "https://wa.me/21627916977"
    },
    {
      icon: FiLinkedin,
      label: t('contact.linkedin'),
      value: "Oussama Chaabene",
      href: "https://www.linkedin.com/in/oussama-chaabene/"
    },
    {
      icon: FiMapPin,
      label: t('contact.location'),
      value: "Ibn Charaf Street, Oudhref, 6052 Gabes, Tunisia",
      href: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials
      const SERVICE_ID = 'service_n49t2tk';
      const TEMPLATE_ID = 'template_wfbak3g';
      const PUBLIC_KEY = 'METHr6HfjxlNpGr_A';

      // Send email
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'oussamachaabeneeee@gmail.com',
        },
        PUBLIC_KEY
      );

      // Success
      setStatusMessage({ type: 'success', message: t('contact.successMessage') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // Error
      setStatusMessage({ type: 'error', message: t('contact.errorMessage') });
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
    <ContactSection id="contact">
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t('contact.title')}
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t('contact.subtitle')}
        </Subtitle>

        <ContactGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactInfo>
            {contactInfo.map((item, index) => (
              <ContactItem
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
              >
                <IconWrapper><item.icon /></IconWrapper>
                <ContactContent>
                  <ContactLabel>{item.label}</ContactLabel>
                  <ContactValue 
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.value}
                  </ContactValue>
                </ContactContent>
              </ContactItem>
            ))}
          </ContactInfo>

          <ContactForm
            variants={itemVariants}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">{t('contact.form.name')}</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">{t('contact.form.email')}</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </FormGroup>
            
            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading}
            >
              <FiSend />
              {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
            </SubmitButton>
            
            {statusMessage && (
              <StatusMessage
                type={statusMessage.type}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {statusMessage.message}
              </StatusMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;