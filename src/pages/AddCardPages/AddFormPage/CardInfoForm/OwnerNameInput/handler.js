const regExpOnlyAlphabet = /[^a-zA-Z]+/g;

export const handleOwnerNameInputChange = (props) => {
  const { e, setCharLength, setOwnerName } = props;
  const inputValue = e.target.value;
  const inputValueOnlyAlphabet = inputValue.replace(regExpOnlyAlphabet, '');

  if (inputValueOnlyAlphabet) {
    setOwnerName(inputValueOnlyAlphabet.toUpperCase());
  }
  setCharLength(inputValue.length);
};
