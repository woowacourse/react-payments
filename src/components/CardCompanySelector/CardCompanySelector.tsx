import styled from "@emotion/styled";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import arrowDownIcon from "@/assets/arrowDownIcon.svg";
import { useState } from "react";

const CARD_COMPANIES = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
];

function CardCompanySelector() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <Container>
      <Title>카드사를 선택해 주세요</Title>
      <Caption>현재 국내 카드사만 가능합니다.</Caption>
      <SelectButton type="button" onClick={handleToggle}>
        <Placeholder>카드사를 선택해주세요</Placeholder>
        <ArrowIcon src={arrowDownIcon} alt="" />
      </SelectButton>

      {isOpen && (
        <OptionList>
          {CARD_COMPANIES.map((company) => (
            <OptionItem key={company}>
              <OptionButton type="button">{company}</OptionButton>
            </OptionItem>
          ))}
        </OptionList>
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.2rem;
`;

const Caption = styled.p`
  font-weight: 400;
  font-size: 0.6rem;
  color: ${COLOR_PALETTE.CAPTION};
  margin-top: 0.25rem;
`;

const SelectButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${COLOR_PALETTE.GREY};
  border-radius: 0.16rem;
  background-color: ${COLOR_PALETTE.WHITE};
  &:focus {
    border: 1px solid ${COLOR_PALETTE["BLACK-900"]};
  }
`;

const Placeholder = styled.span`
  color: ${COLOR_PALETTE.GREY};
  font-weight: 400;
  font-size: 0.65rem;
`;

const ArrowIcon = styled.img`
  width: 0.5rem;
  height: 0.25rem;
`;

const OptionList = styled.ul`
  position: absolute;
  top: calc(100% + 0.3rem);
  left: 0;
  z-index: 10;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 0.35rem;
  border: 1px solid ${COLOR_PALETTE.GREY};
  background-color: ${COLOR_PALETTE.WHITE};
`;

const OptionItem = styled.li`
  width: 100%;
`;

const OptionButton = styled.button`
  width: 100%;
  padding: 0.5rem 0.67rem;
  border: 0;
  border-radius: 0.35rem;
  background-color: ${COLOR_PALETTE.WHITE};
  color: #4f4f4f;
  font-weight: 400;
  font-size: 0.67rem;
  text-align: left;
  cursor: pointer;
`;

export default CardCompanySelector;
