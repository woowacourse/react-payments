import styled from "styled-components";
import ModalButton from "../common/ModalButton/ModalButton.component";

const CardControlButtonWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
`;

const CardControlButtonBox = ({ handleEditCard, handleDeleteCard }) => {
  return (
    <CardControlButtonWrapper>
      <ModalButton type="edit" onClick={handleEditCard}>
        수정하기
      </ModalButton>
      <ModalButton type="delete" onClick={handleDeleteCard}>
        삭제하기
      </ModalButton>
    </CardControlButtonWrapper>
  );
};

export default CardControlButtonBox;
