const regExpOnlyAlphabet = /[^a-zA-Z ]+/g;

export const handleOwnerNameInputChange = (props) => {
  const { e, setOwnerName } = props;
  const inputValue = e.target.value;
  const inputValueOnlyAlphabet = inputValue.replace(regExpOnlyAlphabet, '');

  setOwnerName(inputValueOnlyAlphabet.toUpperCase());
};

export const handleOwnerNameInputBlur = ({ setIsOwnerNameFilled }) => {
  setIsOwnerNameFilled(true);
};
