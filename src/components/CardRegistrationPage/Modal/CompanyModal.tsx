import styled, { keyframes } from "styled-components";
import CompanyButton from "./CompanyButton";
import { useModalAction } from "../../provider/ModalProvider";

const CompanyModal = () => {
  const { isOpenModal, closeModal } = useModalAction();

  const handleClickModalContainer = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <BackDrop onClick={closeModal} isOpenModal={isOpenModal}>
      <ModalContainer onClick={handleClickModalContainer} isOpenModal={isOpenModal}>
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

const BackDrop = styled.div<{ isOpenModal: boolean }>`
  position: fixed;
  top: 0;

  height: 100vh;

  background: rgba(0, 0, 0, 0.5);

  animation: ${({ isOpenModal }) => (isOpenModal ? fadeIn : fadeOut)} 0.2s ease-out;

  @media (min-width: 440px) {
    width: 438px;
  }
  @media (max-width: 440px) {
    width: 100vw;
  }
`;

const ModalContainer = styled.div<{ isOpenModal: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  position: absolute;
  bottom: 0;

  padding: 30px 45px;

  box-sizing: border-box;
  border-radius: 5px 5px 0px 0px;

  background-color: white;

  width: 100%;
  height: 227px;

  animation: ${({ isOpenModal }) => isOpenModal && slideUp} 0.2s ease-out;
`;

const CompanyListColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 0);
  }
`;

export default CompanyModal;
