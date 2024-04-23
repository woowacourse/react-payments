import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EnrollCard from './page/EnrollCard';
import SucceedSubmit from './page/SucceedSubmit';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EnrollCard />} />
        <Route path="/addSucceed" element={<SucceedSubmit />} />
      </Routes>
    </BrowserRouter>
  );
}
