import styled from "styled-components";
import CompanyButton from "./CompanyButton";

const CompanyModal = () => {
  return (
    <BackDrop>
      <ModalContainer>
        <CompanyListColumn>
          <CompanyButton company="BC카드" />
          <CompanyButton company="신한카드" />
          <CompanyButton company="카카오뱅크" />
          <CompanyButton company="현대카드" />
        </CompanyListColumn>
        <CompanyListColumn>
          <CompanyButton company="우리카드" />
          <CompanyButton company="롯데카드" />
          <CompanyButton company="하나카드" />
          <CompanyButton company="국민카드" />
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

export default CompanyModal;
