import styled from "styled-components";
import { Company } from "../../types/company";

interface CompanyProps {
  company: Company;
  selectCompany: (company: Company) => void;
}

export const CompanyIcon = ({ company, selectCompany }: CompanyProps) => {
  const handleClick = () => {
    selectCompany(company);
  };

  return (
    <Wrapper onClick={handleClick}>
      <CompanyImg src={company.imgSrc} alt={company.name} />
      <Name>{company.name}</Name>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 62px;
  align-items: center;
  justify-content: space-between;
`;

const CompanyImg = styled.img`
  width: 37px;
  height: 37px;
`;

const Name = styled.div`
  font-size: 12px;
`;
