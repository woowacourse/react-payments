import { useCallback, useEffect, useState } from 'react';

import { CardInfo } from '../modules/useCardInfoReducer';

interface Props {
  cardInfo: CardInfo | undefined;
}
const NUMBER_OF_DUPLICATED_STEPS = 1;

function useCalculateCompletedCardInfo(props: Props) {
  const { cardInfo } = props;
  const [numberOfCompletedCardInfo, setNumber] = useState(0);

  const calculateNumber = useCallback(() => {
    if (!cardInfo) return 0;
    const completedInfoArray = Object.entries(cardInfo).map(([key, value]) => {
      // value의 타입에 따라서 입력 완료 검사 진행
      if (!value) return false;
      if (key === 'userName') return !!value;
      if (key === 'period') return !!(value.month && value.year);
      if (key === 'numbers')
        return Object.values(value).every((number) => !!number);

      return !!value;
    });

    const { length } = completedInfoArray.filter((item) => !!item);
    // 카드 번호와 카드 마트는 같은 단계에서 진행되서 -1
    const number = length - NUMBER_OF_DUPLICATED_STEPS;

    setNumber(number);
  }, [cardInfo]);

  useEffect(() => {
    calculateNumber();
  }, [calculateNumber]);

  return { numberOfCompletedCardInfo };
}

export default useCalculateCompletedCardInfo;
