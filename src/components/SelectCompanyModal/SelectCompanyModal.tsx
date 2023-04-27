import styled from 'styled-components';
import { CardCompanyEng, KOR_NAME_BY_CARD_COMPANY } from '../../@types/cardCompany';
import BankIconBox from '../cardCompanyIconBox/cardCompanyIconBox';

interface Props {
  onClose: () => void;
}

const BankSelectModal = ({ onClose }: Props) => {
  // TODO: type 문제 : Banks로 하고 싶은데...
  const companyList = [...Object.keys(KOR_NAME_BY_CARD_COMPANY)] as CardCompanyEng[];

  return (
    <StyledContainer>
      {companyList.map((company) => (
        <BankIconBox key={`company-icon-box-${company}`} cardCompany={company} onClose={onClose} />
      ))}
    </StyledContainer>
  );
};

export default BankSelectModal;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px 100px;
  padding: 50px 30px;
`;
