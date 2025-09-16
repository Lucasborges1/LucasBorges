import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin: 40px 0;
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ active, theme }) => active ? theme.colors.accent : theme.colors.greyLight};
  color: ${({ active, theme }) => active ? theme.colors.white : theme.colors.primary};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Tabs = ({ active, onChange }) => {
  return (
    <TabsContainer>
      <TabButton active={active === 'carreira'} onClick={() => onChange('carreira')}>
        Carreira
      </TabButton>
      <TabButton active={active === 'experiencias'} onClick={() => onChange('experiencias')}>
        Experiências
      </TabButton>
      <TabButton active={active === 'design'} onClick={() => onChange('design')}>
        Design
      </TabButton>
    </TabsContainer>
  );
};

export default Tabs;
