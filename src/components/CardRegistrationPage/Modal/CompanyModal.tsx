import styled from "styled-components";
import CompanyButton from "./CompanyButton";
import { useModalAction } from "../../provider/ModalProvider";
import { Modal } from "luxo-react-modal";

const CompanyModal = () => {
  const { isOpenModal, closeModal } = useModalAction();

  return (
    <Modal isOpen={isOpenModal} closeModal={closeModal}>
      <CompanyContainer>
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
      </CompanyContainer>
    </Modal>
  );
};

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  width: inherit;

  position: absolute;
  bottom: 0;

  padding: 30px 45px;

  box-sizing: border-box;
`;

const CompanyListColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CompanyModal;
