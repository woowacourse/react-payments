import styled from 'styled-components';
import { CardCompanyEng, KOR_NAME_BY_CARD_COMPANY } from '../../../@types/cardCompany';
import CardCompanyIconBox from '../../cardCompanyIconBox/CardCompanyIconBox';

interface Props {
  onClose: () => void;
}

const SelectCompanyModal = ({ onClose }: Props) => {
  const companyList = [...Object.keys(KOR_NAME_BY_CARD_COMPANY)] as CardCompanyEng[];

  return (
    <StyledContainer>
      {companyList.map((company) => (
        <CardCompanyIconBox
          key={`company-icon-box-${company}`}
          cardCompany={company}
          onClose={onClose}
        />
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
