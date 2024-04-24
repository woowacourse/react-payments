import styled from "styled-components";

interface IDropdownProps {
  values: string[];
  contents: string[];
  setData: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const createOptionEl = (values: string[], contents?: string[]) => {
  const optionElements = values.map((value, index) => {
    const content = contents ? contents[index] : value;

    return <option value={value}>{content}</option>;
  });

  return optionElements;
};

const Dropdown = ({
  values,
  contents,
  setData,
  setIsValid,
}: IDropdownProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const currentValue = e.target.value;

    setData(currentValue);
    currentValue ? setIsValid(true) : setIsValid(false);
  };

  return (
    <select onChange={onChangeHandler}>
      <option value="">카드사를 선택해주세요</option>
      {createOptionEl(values, contents)}
    </select>
  );
};

export default Dropdown;
