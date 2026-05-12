import { Route, Routes } from 'react-router';
import CardAddPage from './pages/CardAddPage';
import CardAddCompletePage from './pages/CardAddCompletePage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<CardAddPage />} />
            <Route path="/complete" element={<CardAddCompletePage />} />
        </Routes>
    );
}

export default App;
