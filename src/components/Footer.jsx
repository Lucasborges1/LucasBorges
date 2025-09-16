import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 80px;
  padding: 40px 0;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.greyDark};
  margin-bottom: 20px;
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 999px;
  text-decoration: none;
  font-weight: bold;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Text>Estou aberto a novos desafios e possibilidades que agreguem ao meu crescimento como profissional.</Text>
    <EmailLink href="mailto:borgesfernandeslucas@gmail.com">borgesfernandeslucas@gmail.com</EmailLink>
    <Socials>
      <SocialLink href="#">LinkedIn</SocialLink>
      <SocialLink href="#">Instagram</SocialLink>
      <SocialLink href="#">Behance</SocialLink>
    </Socials>
  </FooterContainer>
);

export default Footer;
