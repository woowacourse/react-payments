import { Container, OptionWrapper, Option } from "./PaymentsDropdownOptions.styled"

interface PaymentsDropdownOptionsProps<T> {
  options: T[];
  changeOption: (option: T, isComplete: boolean) => void;
  handleIsOpened: () => void;
}

const PaymentsDropdownOptions = <T extends {}>(props: PaymentsDropdownOptionsProps<T>) => {
  const { options, changeOption, handleIsOpened } = props

  const handleOnClick = (value: T) => {
    changeOption(value, true);
    handleIsOpened();
  }

  return (
    <Container>
      {options.map((value, index) => {
        return (<OptionWrapper key={index} onClick={() => handleOnClick(value)}>
          <Option key={index}>
            {value.toString()}
          </Option>
        </OptionWrapper>)
      })}
    </Container>)
}

export default PaymentsDropdownOptions;