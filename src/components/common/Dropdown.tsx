import styled from "styled-components";

interface IDropdownProps {
  values: string[];
  contents: string[];
  setData: React.Dispatch<React.SetStateAction<string>>;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const createOptionEl = (values: string[], contents?: string[]) => {
  const optionElements = values.map((value, index) => {
    const content = contents ? contents[index] : value;

    return (
      <Option key={index} value={value}>
        {content}
      </Option>
    );
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
    <Select onChange={onChangeHandler}>
      <Option value="">카드사를 선택해주세요</Option>
      {createOptionEl(values, contents)}
    </Select>
  );
};

const Select = styled.select`
  padding: 7px 5px;
  width: 100%;
  border-radius: 5px;
`;

const Option = styled.option`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 15px;
`;

export default Dropdown;
