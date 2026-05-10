import styled from "@emotion/styled";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useCardBrandContext } from "../../../context/cardBrand/CardBrandContext";

export default function Dropdown() {
  const cardBrand = useCardBrandContext();

  return (
    <Wrapper>
      <Button
        onClick={cardBrand.toggleDropdown}
        isOpen={cardBrand.isOpen}
        selectedItem={!!cardBrand.selectedItem}
      >
        <span>
          {cardBrand.selectedItem === ""
            ? "카드사를 선택해주세요"
            : cardBrand.selectedItem}
        </span>
        {cardBrand.isOpen ? (
          <MdOutlineKeyboardArrowDown />
        ) : (
          <MdOutlineKeyboardArrowUp />
        )}
      </Button>
      {cardBrand.isOpen && (
        <Ul>
          {cardBrand.options.map((option, index) => (
            <Li key={index} onClick={() => cardBrand.handleItemClick(option)}>
              {option}
            </Li>
          ))}
        </Ul>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin: 4px 0;
`;

const Button = styled.button<{ isOpen: boolean; selectedItem: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 31px;
  border-radius: 3px;
  border: 1px solid
    ${(props) => (props.isOpen ? "rgba(0,0,0,1)" : "rgba(172, 172, 172, 1)")};
  background-color: white;
  padding: 8px;
  cursor: pointer;
  text-align: left;

  span,
  svg {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0%;
    vertical-align: middle;
  }
  svg {
    color: ${(props) =>
      props.isOpen ? "rgba(0,0,0,1)" : "rgba(172, 172, 172, 1)"};
  }
  span {
    color: ${(props) =>
      props.selectedItem ? "rgba(0,0,0,1)" : "rgba(172, 172, 172, 1)"};
  }
`;

const Ul = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;

const Li = styled.li`
  padding: 8px 73px 8px 11px;
  gap: 7px;
  cursor: pointer;
  border-bottom: 1px solid rgba(172, 172, 172, 1);

  font-weight: 400;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: 0%;
  color: rgba(79, 79, 79, 1);
`;
