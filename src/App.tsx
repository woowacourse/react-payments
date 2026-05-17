import { Route, Routes } from 'react-router';
import CardAddPage from './pages/CardAddPage';
import CardAddCompletePage from './pages/CardAddCompletePage';
import CardListPage from './pages/CardListPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<CardAddPage />} />
            <Route path="/list" element={<CardListPage />} />
            <Route path="/complete" element={<CardAddCompletePage />} />
        </Routes>
    );
}

export default App;
