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
    <Button type="button" onClick={onClick}>
      {cardCompany}
    </Button>
  );
};

export default CardCompanyOption;

const Button = styled.button`
  width: 100%;

  &:hover {
    background-color: #ededed;
  }
`;
