import { ROUTE } from '../../../../constants';
import { isCardNameFulfilled } from './validator';

export const handleCardInfoSubmit = ({ e, initialCardInfo, cardInfo, setIsModalOpen, setRoute }) => {
  e.preventDefault();

  if (!isCardNameFulfilled(cardInfo.company, initialCardInfo.company)) {
    setIsModalOpen(true);
    return;
  }
  setRoute(ROUTE.ADD_COMPLETE);
};
