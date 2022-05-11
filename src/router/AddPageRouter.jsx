import { Route, Routes } from 'react-router-dom';

import { AddCompletePage, AddPage } from '../pages';

export default function AddPageRouter({ card }) {
  return (
    <Routes>
      <Route path="/" element={<AddPage />} />
      <Route path="/complete" element={<AddCompletePage card={card} />} />
    </Routes>
  );
}
