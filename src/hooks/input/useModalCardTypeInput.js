import { useEffect, useState } from "react";
import PropType from "prop-types";
import { CARD } from "../../constants";

const useModalCardTypeInput = ({ modalInterface }) => {
  //TODO: CARD.UNKNOWN 상태 cardAddition page에도 정의되어있음, 분산되어있는거 하나라 합치기
  const [cardType, setCardType] = useState(CARD.UNKNOWN);

  const {
    dataPassage: {
      data: { cardType: selectedCardType },
    },
  } = modalInterface;

  useEffect(() => {
    if (!selectedCardType) {
      return;
    }

    setCardType(selectedCardType);
  }, [selectedCardType]);

  return { value: cardType };
};

export default useModalCardTypeInput;

useModalCardTypeInput.PropType = {
  targetInputType: PropType.string.isRequired,
  maxLength: PropType.string.isRequired,
  keyboardInterface: PropType.shape({
    isModalVisible: PropType.bool.isRequired,
    openModal: PropType.func.isRequired,
    closeModal: PropType.func.isRequired,
    dataPassage: PropType.shape({
      data: PropType.shape({
        cardType: PropType.string.isRequired,
      }).isRequired,
      passData: PropType.func.isRequired,
    }),
  }).isRequired,
};
