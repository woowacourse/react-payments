import { useState } from "react"
import { Container, DropdownContainer, Img, Preview, PreviewContainer } from "./PaymentsDropdown.styled"
import PaymentsDropdownOptions from "./PaymentsDropdownOptions";

import chevronDown from "../../../asset/chevron-down.svg";
import chevronUp from "../../../asset/chevron-up.svg";

interface PaymentsDropdownProps<T> {
  changeOption: (option: T) => void;
  value: T,
  placeholder: string,
  options: T[]
  width?: number
}

const PaymentsDropdown = <T extends {}>(props: PaymentsDropdownProps<T>) => {
  const { changeOption, value, placeholder, options, width } = props

  const [isOpened, setIsOpened] = useState(false)

  const handleIsOpened = () => {
    setIsOpened(!isOpened)
  }

  return (
    <DropdownContainer>
      <Container isOpened={isOpened} onClick={handleIsOpened} width={width}>
        <PreviewContainer>
          <Preview value={value}>
            {value ? `${value}` : placeholder}
          </Preview>
          <Img src={isOpened ? chevronUp : chevronDown} />
        </PreviewContainer>
      </Container>
      {!isOpened || <PaymentsDropdownOptions options={options} changeOption={changeOption} handleIsOpened={handleIsOpened} />}
    </DropdownContainer>
  )

}

export default PaymentsDropdown;
