import { useEffect, useState } from 'react';
import { usePageContext } from 'contexts/PageContext';
import { useCardDataContext } from 'contexts/CardDataContext';
import useModal from 'hooks/useModal';

import { Card } from 'components';

import { CARD_EDIT_TARGET_INDEX, PAGE_LIST } from 'constants/';
import { CardWallet, ButtonAddCard } from './styles';

import CardEditConfirm from './Containers/CardEditConfirm';

function CardList() {
  const { setPageTitle, setPageLocation } = usePageContext();
  useEffect(() => setPageTitle('카드 목록'), []);

  const [focusCardIndex, setCardFocus] = useState(-1);

  const {
    Modal: EditModal,
    handleModalOpen: handleEditModalOpen,
    handleModalClose: handleEditModalClose,
  } = useModal();

  const { cardList, setCardEditIndex } = useCardDataContext();

  const onClickCard = (index) => {
    setCardFocus(index);
    handleEditModalOpen();
  };

  const onClickAddButton = () => {
    setCardEditIndex(CARD_EDIT_TARGET_INDEX.NEW);
    setPageLocation(PAGE_LIST.CARD_EDITOR);
  };

  return (
    <>
      <div className="layout-side-container">
        <CardWallet>
          {cardList.map((cardData, index) => (
            <Card
              key={cardData.id}
              {...cardData}
              isMargin={false}
              onClick={() => onClickCard(index)}
            />
          ))}
        </CardWallet>
      </div>

      <div className="layout-main-container bottom">
        <ButtonAddCard onClick={onClickAddButton}>
          <div className="icon">➕</div>
          <p className="text">새로운 카드 추가</p>
        </ButtonAddCard>
      </div>

      <EditModal>
        <CardEditConfirm
          focusCardIndex={focusCardIndex}
          onClickCloseButton={handleEditModalClose}
        />
      </EditModal>
    </>
  );
}

export default CardList;
