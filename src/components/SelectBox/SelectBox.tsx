const SelectBox = ({ optionArr }: { optionArr: string[] }) => {
  return (
    <select>
      {optionArr.map((option) => {
        return <option>{option}</option>;
      })}
    </select>
  );
};

export default SelectBox;
