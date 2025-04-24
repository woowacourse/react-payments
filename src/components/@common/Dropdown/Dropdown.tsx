import { DropdownContainer } from "./Dropdown.style";
import theme from "../../../styles/theme";

type DropdownProps = {
  options: string[];
}

function Dropdown({options}: DropdownProps) {
  return (
    <select css={DropdownContainer} name="pets" id="pet-select">
      {options.map((option) => {
        return <option key={option} value={option} color={theme.color.cardBrand[option]}>{option}</option>
      })}
    </select>
  );
}

export default Dropdown;
