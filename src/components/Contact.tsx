import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { Section, Container, Kicker, SectionTitle, fadeUp } from '../styles/Shared';

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const Left = styled.div``;

const Subtitle = styled.p`
  font-size: 0.8125rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 26rem;
  margin: 0.75rem 0 2rem;
`;

const InfoList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InfoRow = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

const InfoLabel = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const InfoValue = styled.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};

  ${InfoRow}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormCard = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.375rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const inputStyles = `
  width: 100%;
  padding: 0.625rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
  }
`;

const Input = styled.input`
  ${inputStyles}
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Textarea = styled.textarea`
  ${inputStyles}
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  resize: vertical;
  min-height: 120px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryForeground};
  border: none;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 500;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled(motion.div)<{ $type: 'success' | 'error' }>`
  padding: 0.75rem;
  margin-top: 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 0.8125rem;
  background: ${({ $type }) =>
    $type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
  color: ${({ $type }) => ($type === 'success' ? '#16a34a' : '#dc2626')};
  border: 1px solid
    ${({ $type }) => ($type === 'success' ? '#22c55e55' : '#ef444455')};
`;

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      label: t('contact.email'),
      value: 'oussamachaabeneeee@gmail.com',
      href: 'mailto:oussamachaabeneeee@gmail.com'
    },
    {
      icon: <Phone size={16} />,
      label: t('contact.phone'),
      value: '+216 27 916 977',
      href: 'tel:+21627916977'
    },
    {
      icon: <FaWhatsapp size={16} />,
      label: 'WhatsApp',
      value: '+216 27 916 977',
      href: 'https://wa.me/21627916977'
    },
    {
      icon: <Linkedin size={16} />,
      label: t('contact.linkedin'),
      value: 'Oussama Chaabene',
      href: 'https://www.linkedin.com/in/oussama-chaabene/'
    },
    {
      icon: <MapPin size={16} />,
      label: t('contact.location'),
      value: 'Sfax, Tunisia',
      href: '#contact'
    }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage(null);

    try {
      const SERVICE_ID = 'service_n49t2tk';
      const TEMPLATE_ID = 'template_wfbak3g';
      const PUBLIC_KEY = 'METHr6HfjxlNpGr_A';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'oussamachaabeneeee@gmail.com'
        },
        PUBLIC_KEY
      );

      setStatusMessage({ type: 'success', message: t('contact.successMessage') });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatusMessage({ type: 'error', message: t('contact.errorMessage') });
      console.error('EmailJS error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Section id="contact" $surface $borderTop>
      <Container>
        <Columns>
          <Left>
            <Kicker>Contact</Kicker>
            <SectionTitle {...fadeUp}>{t('contact.title')}</SectionTitle>
            <Subtitle>{t('contact.subtitle')}</Subtitle>

            <InfoList {...fadeUp}>
              {contactInfo.map(item => (
                <InfoRow
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    item.href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                >
                  <IconBox>{item.icon}</IconBox>
                  <div>
                    <InfoLabel>{item.label}</InfoLabel>
                    <InfoValue>{item.value}</InfoValue>
                  </div>
                </InfoRow>
              ))}
            </InfoList>
          </Left>

          <FormCard {...fadeUp} onSubmit={handleSubmit}>
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

            <SubmitButton type="submit" disabled={isLoading}>
              <Send size={14} />
              {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
            </SubmitButton>

            {statusMessage && (
              <StatusMessage
                $type={statusMessage.type}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {statusMessage.message}
              </StatusMessage>
            )}
          </FormCard>
        </Columns>
      </Container>
    </Section>
  );
};

export default Contact;
