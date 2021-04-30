import { PAGE, MAX_NICKNAME_LENGTH } from '../../../../constants';

export const handleNicknameInputChange = ({ e, setNickname }) => {
  const slicedInputValue = e.target.value.slice(0, MAX_NICKNAME_LENGTH);
  setNickname(slicedInputValue);
};

export const handleNicknameSubmit = ({ e, setRoute, cardInfo, addCardInfoToList }) => {
  e.preventDefault();
  addCardInfoToList(cardInfo);
  setRoute(PAGE.CARD_LIST);
};
