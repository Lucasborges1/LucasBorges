import React from 'react';
import styled from 'styled-components';

const IntroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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

const Intro = () => (
  <IntroContainer>
    <TextBlock>
      <Title>Meu portfólio.</Title>
      <Subtitle>Me chamo Lucas, e aqui compartilho minhas experiências e projetos.</Subtitle>
    </TextBlock>
  </IntroContainer>
);

export default Intro;
