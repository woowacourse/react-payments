import ModalButton from "component/common/ModalButton/ModalButton.component";

import { RowFlexWrapper } from "styles/wrapper";

const CardControlButtonBox = ({ handleEditCard, handleDeleteCard }) => {
  return (
    <RowFlexWrapper gap="25">
      <ModalButton type="edit" onClick={handleEditCard}>
        수정하기
      </ModalButton>
      <ModalButton type="delete" onClick={handleDeleteCard}>
        삭제하기
      </ModalButton>
    </RowFlexWrapper>
  );
};

export default CardControlButtonBox;
