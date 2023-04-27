import styled from "styled-components";
import {
  BCCardLogo,
  HanaCardLogo,
  HyundaiCardLogo,
  KBCardLogo,
  KakaoBankLogo,
  LotteCardLogo,
  ShinhanCardLogo,
  WooriCardLogo,
} from "../../assets/companyLogo";

const CompanyModal = () => {
  return (
    <BackDrop>
      <ModalContainer>
        <CompanyListColumn>
          <CompanyButton>
            <BCCardLogo />
            BC카드
          </CompanyButton>
          <CompanyButton>
            <ShinhanCardLogo />
            신한카드
          </CompanyButton>
          <CompanyButton>
            <KakaoBankLogo />
            카카오뱅크
          </CompanyButton>
          <CompanyButton>
            <HyundaiCardLogo />
            현대카드
          </CompanyButton>
        </CompanyListColumn>
        <CompanyListColumn>
          <CompanyButton>
            <WooriCardLogo />
            우리카드
          </CompanyButton>
          <CompanyButton>
            <LotteCardLogo />
            롯데카드
          </CompanyButton>
          <CompanyButton>
            <HanaCardLogo />
            하나카드
          </CompanyButton>
          <CompanyButton>
            <KBCardLogo />
            국민카드
          </CompanyButton>
        </CompanyListColumn>
      </ModalContainer>
    </BackDrop>
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;

  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  bottom: 0;

  padding: 40px 45px;

  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  background-color: white;

  width: 100%;
  height: 227px;
`;

const CompanyListColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CompanyButton = styled.button`
  width: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  background: none;
  border: none;

  font-weight: 500;
  font-size: 12px;
  color: #525252;

  cursor: pointer;
`;

export default CompanyModal;
