// src/components/Experiencias.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  margin-bottom: 60px;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media(min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemImg = styled.img`
  border-radius: 8px;
  width: 100%;
  height: auto;
`;

const ItemText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
`;

const Experiencias = () => {
  const items = [
    {
      empresa: 'Globo',
      texto: 'Em 2021, atuei nos jornais mais importantes ... etc',
      imgSrc: '/images/globo1.png' // etc
    },
    {
      empresa: 'Globo',
      texto: 'Em 2023, recebi uma menção honrosa ...',
      imgSrc: '/images/globo2.png'
    },
    {
      empresa: 'Globo',
      texto: 'Em 2025, talvez o maior momento da minha carreira ...',
      imgSrc: '/images/globo3.png'
    },
    {
      empresa: 'ESPN',
      texto: 'Em 2020, eu mudei para São Paulo ...',
      imgSrc: '/images/espn.png'
    },
    {
      empresa: 'FOX Sports',
      texto: 'Em 2017, comecei minha carreira ...',
      imgSrc: '/images/foxsports.png'
    },
  ];

  return (
    <Section>
      <ItemGrid>
        {items.map((item, idx) => (
          <Item key={idx}>
            <ItemImg src={item.imgSrc} alt={`Experiência ${item.empresa}`} />
            <ItemText>{item.texto}</ItemText>
          </Item>
        ))}
      </ItemGrid>
    </Section>
  );
};

export default Experiencias;
