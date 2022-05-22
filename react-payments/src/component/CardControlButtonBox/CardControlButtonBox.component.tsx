import ModalButton from "component/common/ModalButton/ModalButton.component";

import { RowFlexWrapper } from "styles/wrapper";

export interface CardControlButtonBoxProps {
  handleEditCard: () => void;
  handleDeleteCard: () => Promise<void>;
}

const CardControlButtonBox = ({
  handleEditCard,
  handleDeleteCard,
}: CardControlButtonBoxProps) => {
  return (
    <RowFlexWrapper gap="25">
      <ModalButton styleType="edit" onClick={handleEditCard}>
        수정하기
      </ModalButton>
      <ModalButton styleType="delete" onClick={handleDeleteCard}>
        삭제하기
      </ModalButton>
    </RowFlexWrapper>
  );
};

export default CardControlButtonBox;
