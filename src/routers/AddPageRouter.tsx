import { AddCompletePage, AddPage } from '../pages';
import { Route, Routes } from 'react-router-dom';

import { CardType } from 'types';

type Props = {
  card: CardType;
};

export default function AddPageRouter({ card }: Props) {
  return (
    <Routes>
      <Route path="/" element={<AddPage />} />
      <Route path="/complete" element={<AddCompletePage card={card} />} />
    </Routes>
  );
}
