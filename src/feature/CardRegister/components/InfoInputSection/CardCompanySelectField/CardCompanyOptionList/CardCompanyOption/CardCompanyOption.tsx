import styled from "styled-components";
import type { CardCompanyType } from "../../../../../../../common/types/CardCompany";

const CardCompanyOption = ({
  onClick,
  cardCompany,
}: {
  onClick: () => void;
  cardCompany: CardCompanyType;
}) => {
  return (
    <StyledButton type="button" onClick={onClick}>
      {cardCompany}
    </StyledButton>
  );
};

export default CardCompanyOption;

const StyledButton = styled.button`
  width: 100%;

  &:hover {
    background-color: #ededed;
  }
`;
