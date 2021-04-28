import { PAGE, MAX_NICKNAME_LENGTH } from '../../../../constants';

export const handleNicknameInputChange = ({ e, setCardInfo }) => {
  const slicedInputValue = e.target.value.slice(0, MAX_NICKNAME_LENGTH);
  setCardInfo((prevState) => ({ ...prevState, nickname: slicedInputValue }));
};

export const handleNicknameSubmit = ({ e, setRoute }) => {
  e.preventDefault();
  setRoute(PAGE.CARD_LIST);
};
