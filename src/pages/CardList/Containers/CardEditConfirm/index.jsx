import { usePageContext } from 'contexts/PageContext';
import { useCardDataContext } from 'contexts/CardDataContext';

import Button from 'components/@common/Button';
import { Card } from 'components';

import { PAGE_LIST } from 'constants/';

function CardEditConfirm({ focusCardIndex, onClickCloseButton }) {
  const { setPageLocation } = usePageContext();
  const { getCardData, setCardEditIndex, removeCardData } = useCardDataContext();

  const focusCardData = getCardData[focusCardIndex];

  const onClickEditButton = () => {
    setCardEditIndex(focusCardIndex);
    setPageLocation(PAGE_LIST.CARD_EDITOR);
  };

  const onClickDeleteButton = async () => {
    if (!confirm('정말 해당 카드를 제거하시겠습니까?')) return;

    try {
      await removeCardData(focusCardIndex);
    } catch (error) {
      alert(error.message);
      return;
    }

    onClickCloseButton();
  };

  return (
    <>
      <h2>카드 편집</h2>
      {focusCardData && <Card {...focusCardData} />}
      <div className="button-container flex">
        <Button type="primary" width="50%" onClick={onClickEditButton}>
          편집
        </Button>
        <Button type="warning" width="50%" onClick={onClickDeleteButton}>
          삭제
        </Button>
      </div>
      <Button width="100%" onClick={onClickCloseButton}>
        닫기
      </Button>
    </>
  );
}

export default CardEditConfirm;
