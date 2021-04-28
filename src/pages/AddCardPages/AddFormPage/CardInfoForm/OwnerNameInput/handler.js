const regExpOnlyAlphabet = /[^a-zA-Z ]+/g;

export const handleOwnerNameInputChange = (props) => {
  const { e, setCardInfo } = props;
  const inputValue = e.target.value;
  const inputValueOnlyAlphabet = inputValue.replace(regExpOnlyAlphabet, '');

  setCardInfo((prevState) => ({
    ...prevState,
    ownerName: inputValueOnlyAlphabet.toUpperCase(),
  }));
};

export const handleOwnerNameInputBlur = (props) => {
  const { setCardInfo } = props;

  setCardInfo((prevState) => ({ ...prevState, isOwnerNameFilled: true }));
};
