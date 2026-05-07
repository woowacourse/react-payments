import styled from "styled-components";
import type { CardCompanyType } from "../../../../../../common/types/CardCompany";

const CardCompanyOption = ({
  cardCompany,
}: {
  cardCompany: CardCompanyType;
}) => {
  return <Option value={cardCompany}>{cardCompany}</Option>;
};

export default CardCompanyOption;

const Option = styled.option`
  width: 100%;

  &:hover {
    background-color: #ededed;
  }
`;
