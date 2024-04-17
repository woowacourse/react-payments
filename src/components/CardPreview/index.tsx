import React, { useEffect, useState } from 'react';

import { CARD_MARK, CARD_NUMBERS } from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

interface CardPreviewProps {
  cardInfo: CardInfo;
}
function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, number, period, userName } = cardInfo;
  const SLASH = '/';
  const DOT = '·';
  interface MarkInfo {
    src: string | undefined;
    alt: string | undefined;
  }

  const INITIAL_MARK_INFO: MarkInfo = { src: undefined, alt: undefined };
  const [markInfo, setMarkInfo] = useState<MarkInfo>(INITIAL_MARK_INFO);
  const [cardNumbers, setCardNumbers] = useState<string>();

  const changeNumberToMasking = () => {
    if (!number) return;
    const numberList = number
      .split(',')
      .map((item, index) => {
        if (item && index > 1) {
          return DOT.repeat(CARD_NUMBERS.length);
        }
        return item;
      })
      .join(' ');

    setCardNumbers(numberList);
  };

  useEffect(() => {
    if (!mark) {
      return;
    }
    setMarkInfo(CARD_MARK[mark]);
  }, [mark]);

  useEffect(() => {
    changeNumberToMasking();
  }, [number]);

  return (
    <div>
      <div className="inner">
        <div className="top">
          <div className="chip"></div>
          <img src={markInfo.src} alt={markInfo.alt} />
        </div>
        <div className="info">
          <div className="card-number">{cardNumbers}</div>
          <div className="period">
            {period.month}
            {period.month && period.year ? SLASH : ''}
            {period.year}
          </div>
          <div className="user">{userName}</div>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
