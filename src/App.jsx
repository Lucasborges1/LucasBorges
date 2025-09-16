import React, { useState } from 'react';
import Intro from './components/Intro';
import Tabs from './components/Tabs';
import Carreira from './components/Carreira';
import Experiencias from './components/Experiencias';
import Design from './components/Design';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

const AppWrapper = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
\`;

function App() {
  const [activeTab, setActiveTab] = useState('carreira');

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Intro />
        <Tabs active={activeTab} onChange={setActiveTab} />
        {activeTab === 'carreira' && <Carreira />}
        {activeTab === 'experiencias' && <Experiencias />}
        {activeTab === 'design' && <Design />}
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
