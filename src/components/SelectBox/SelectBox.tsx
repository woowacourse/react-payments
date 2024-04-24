const SelectBox = ({ optionArr }: { optionArr: string[] }) => {
  return (
    <select>
      {optionArr.map((option, index) => {
        return <option key={index}>{option}</option>;
      })}
    </select>
  );
};

export default SelectBox;
