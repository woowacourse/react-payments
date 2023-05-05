import styled from "styled-components";
import { cardMap } from "../../constant/Card";
import { CardCompany } from "../../types";

type CardCompanyIconProps = {
  company: CardCompany;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardCompanyIcon = ({ company, onClickHandler }: CardCompanyIconProps) => {
  return (
    <Wrapper name={company} onClick={onClickHandler}>
      {company && cardMap.get(company)?.component}
      <Company>{company}</Company>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

const Company = styled.span`
  color: #525252;
`;
export default CardCompanyIcon;
