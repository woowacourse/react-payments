import styled from 'styled-components';
import { CardCompanyEng, KOR_NAME_BY_CARD_COMPANY } from '../../../@types/cardCompany';
import CardCompanyIconContainer from '../../cardCompanyIconContainer/CardCompanyIconContainer';

const SelectCompanyModal = () => {
  const companyList = [...Object.keys(KOR_NAME_BY_CARD_COMPANY)] as CardCompanyEng[];

  return (
    <StyledContainer>
      {companyList.map((company) => (
        <CardCompanyIconContainer key={`company-icon-box-${company}`} cardCompany={company} />
      ))}
    </StyledContainer>
  );
};

export default SelectCompanyModal;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px;
`;
