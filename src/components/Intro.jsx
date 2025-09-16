// src/components/Intro.jsx
import React from 'react';
import styled from 'styled-components';
import perfilImg from '../public/images/perfil1.png'; // substitua pelo seu arquivo exportado

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media(min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.greyDark};
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  flex: 1;
  margin-top: 20px;

  @media(min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
    margin-left: 40px;
  }

  img {
    border-radius: 8px;
    width: 100%;
    max-width: 300px;
    object-fit: cover;
  }
`;

const Intro = () => (
  <IntroContainer>
    <TextBlock>
      <Title>Meu portfólio.</Title>
      <Subtitle>Me chamo Lucas, e aqui compartilho minhas experiências e projetos.</Subtitle>
    </TextBlock>
    <ImageWrapper>
      <img src={perfilImg} alt="Imagem de perfil Lucas" />
    </ImageWrapper>
  </IntroContainer>
);

export default Intro;
