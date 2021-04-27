export const handleOwnerNameInputChange = (props) => {
  const { e, setCharLength } = props;
  const inputValue = e.target.value;

  setCharLength(inputValue.length);
};
