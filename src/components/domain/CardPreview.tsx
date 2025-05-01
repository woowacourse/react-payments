import styled from '@emotion/styled';
import { CARD_COMPANY_COLORS, CARD_TYPE_PATH } from '../../constants/setting';
import getCardType from '../../utils/getCardType';
import getMaskedCardNumber from '../../utils/getMaskedCardNumber';

interface CardPreviewProps {
  cardNumber: string[];
  company: keyof typeof CARD_COMPANY_COLORS;
  expiration: { month: string; year: string };
}

const CardPreview = ({ cardNumber, company, expiration }: CardPreviewProps) => {
  const cardType = getCardType(cardNumber[0]);

  return (
    <S.CardContainer company={company}>
      <S.CardHeader>
        <S.CardIC />
        {cardType !== 'None' && <S.CardType src={CARD_TYPE_PATH[cardType]} alt={cardType} />}
      </S.CardHeader>

      <S.CardInfo>
        <p>{getMaskedCardNumber(cardNumber).join(' ')}</p>
        <p>
          {expiration.year === '' ? expiration.month : `${expiration.month} / ${expiration.year}`}
        </p>
      </S.CardInfo>
    </S.CardContainer>
  );
};

export default CardPreview;

const S = {
  CardContainer: styled.div<{ company: keyof typeof CARD_COMPANY_COLORS }>`
    width: 212px;
    height: 132px;
    color: ${({ company }) => (company === '카카오뱅크' ? '#333' : 'white')};
    padding: 8px 12px;
    border-radius: 4px;
    background: ${({ company }) => CARD_COMPANY_COLORS[company]};
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
    margin-bottom: 30px;
  `,

  CardHeader: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  `,

  CardIC: styled.div`
    width: 36px;
    height: 22px;
    background: #ddcd78;
    border-radius: 2px;
    stroke-width: 0.5px;
    stroke: rgba(221, 205, 120, 0.1);
  `,

  CardType: styled.img`
    width: 36px;
    height: 22px;
  `,

  CardInfo: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    letter-spacing: 1.5px;
  `,
};
