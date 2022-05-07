import React from 'react';
import styled from 'styled-components';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import CardRegistrationPage from './pages/CardRegistrationPage.jsx/CardRegistrationPage';
import CardAliasNamingPage from './pages/CardAliasNamingPage/CardAliasNamingPage';

const App = () => {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<CardRegistrationPage />} />
        <Route path="/confirm" element={<CardAliasNamingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  padding: 16px 24px;
`;

export default App;
