import { ROUTE } from '../../../../constants';
import { isCardNameFulfilled } from './validator';

export const handleCardInfoSubmit = ({ e, initialCardInfo, cardInfo, setIsModalOpen, history }) => {
  e.preventDefault();

  if (!isCardNameFulfilled(cardInfo.company, initialCardInfo.company)) {
    setIsModalOpen(true);
    return;
  }
  history.push(ROUTE.ADD_COMPLETE);
};
