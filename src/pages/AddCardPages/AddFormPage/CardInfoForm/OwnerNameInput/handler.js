const regExpOnlyAlphabet = /[^a-zA-Z ]+/g;

export const handleOwnerNameInputChange = (props) => {
  const { e, setCharLength, setOwnerName } = props;
  const inputValue = e.target.value;
  const inputValueOnlyAlphabet = inputValue.replace(regExpOnlyAlphabet, '');

  setOwnerName(inputValueOnlyAlphabet.toUpperCase());
  setCharLength(inputValue.length);
};

export const handleOwnerNameInputBlur = (props) => {
  const { e, setOwnerNameInString } = props;
  const inputValue = e.target.value;

  setOwnerNameInString(inputValue);
};
