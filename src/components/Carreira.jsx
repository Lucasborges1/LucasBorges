import React from 'react';
import styled from 'styled-components';

const Section = styled.section\`
  margin-bottom: 60px;
\`;

const EntryList = styled.div\`
  display: flex;
  flex-direction: column;
  gap: 16px;
\`;

const Entry = styled.div\`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: \${({ theme }) => theme.colors.background};
  border-radius: 8px;
\`;

const EntryText = styled.div\`
  flex: 1;
\`;

const EntryTitle = styled.h3\`
  font-size: 1.125rem;
  color: \${({ theme }) => theme.colors.primary};
  font-weight: bold;
\`;

const EntrySubtitle = styled.p\`
  font-size: 1rem;
  color: \${({ theme }) => theme.colors.greyDark};
  margin-top: 4px;
\`;

const EntryDate = styled.span\`
  color: \${({ theme }) => theme.colors.greyDark};
  font-size: 0.875rem;
\`;

const Carreira = () => {
  const data = [
    { empresa: 'Globo', cargo: 'Editor de Vídeo / Roteirista', periodo: '2021 - 2025' },
    { empresa: 'ESPN', cargo: 'Editor de Vídeo', periodo: '2020 - 2021' },
    { empresa: 'FOX Sports', cargo: 'Editor de Vídeo', periodo: '2017 - 2020' },
  ];

  return (
    <Section>
      <EntryList>
        {data.map((item, idx) => (
          <Entry key={idx}>
            <EntryText>
              <EntryTitle>{item.empresa}</EntryTitle>
              <EntrySubtitle>{item.cargo}</EntrySubtitle>
            </EntryText>
            <EntryDate>{item.periodo}</EntryDate>
          </Entry>
        ))}
      </EntryList>
    </Section>
  );
};

export default Carreira;
