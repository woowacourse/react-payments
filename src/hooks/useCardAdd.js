import MESSAGE from '../constant/message';

const useCardAdd = () => {
  // 추후 요구사항에서 카드를 추가 후 처리가 필요할 것 같아, 카드를 추가하는 hooks를 미리 분리했습니다.
  const addCard = () => {
    alert(MESSAGE.SAVE_CARD_INFO);
  };

  return { addCard };
};

export default useCardAdd;
