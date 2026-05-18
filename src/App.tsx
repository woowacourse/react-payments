import { Navigate, Route, Routes } from 'react-router';
import CardAddPage from './pages/CardAddPage';
import CardAddCompletePage from './pages/CardAddCompletePage';
import CardListPage from './pages/CardListPage';
import styled from '@emotion/styled';

function App() {
    return (
        <AppContainer>
            <Routes>
                <Route path="/" element={<Navigate to="/list" replace />} />
                <Route path="/add-card" element={<CardAddPage />} />
                <Route path="/list" element={<CardListPage />} />
                <Route path="/complete" element={<CardAddCompletePage />} />
            </Routes>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    width: 376px;
    height: 760px;
    margin: 0 auto;
    background-color: #ffffff;
    overflow: hidden;
    position: relative;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
