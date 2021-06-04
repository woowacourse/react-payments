import { useState } from "react";
import PropType from "prop-types";
import { CARD } from "../../constants";
import { useEffectAfterInitialize } from "..";

const useModalCardTypeInput = ({ modalInterface }) => {
  const [cardType, setCardType] = useState(CARD.UNKNOWN);

  const {
    dataPassage: {
      data: { cardType: selectedCardType },
    },
  } = modalInterface;

  useEffectAfterInitialize(() => {
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
