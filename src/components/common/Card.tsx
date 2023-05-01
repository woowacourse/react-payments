import styled from 'styled-components';
import { CardType } from '../../abstracts/types';
import { BANK_COLOR_MAP } from '../../abstracts/constants';

interface CardProps extends Pick<CardType, 'cardNumber' | 'expireDate' | 'ownerName' | 'bank' | 'alias'> {
  onClick?: () => void;
}

const Card = ({ cardNumber, ownerName, expireDate, bank, alias, onClick }: CardProps) => {
  const BankImage = bank ? BANK_COLOR_MAP[bank.id].image : () => <></>;
  return (
    <CardSectionWrapper>
      <CardWrapper bankId={bank?.id} onClick={onClick}>
        <CardFront bankId={bank?.id}>
          {bank && (
            <CardHead>
              <BankName>{bank.bankName}</BankName>
              <BankImage />
            </CardHead>
          )}
          <CardChip />
          <CardNumberArea>
            {cardNumber.map((number, index) => (
              <CardNumber>
                {number.length ? (index >= 2 ? '∙'.repeat(number.length) : number) : null}
              </CardNumber>
            ))}
          </CardNumberArea>
          <CardInfoArea>
            <OwnerName>{ownerName || 'NAME'}</OwnerName>
            <ExpireDate>{expireDate.join('') !== '' ? expireDate.join('/') : 'MM/YY'}</ExpireDate>
          </CardInfoArea>
        </CardFront>
        <CardBack>
          <CardMagnetic />
        </CardBack>
      </CardWrapper>
      {alias && <CardAlias>{alias}</CardAlias>}
    </CardSectionWrapper>
  );
};

export default Card;

const CardSectionWrapper = styled.div`
  position: relative;
`;

const CardAlias = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
  opacity: 0.9;
  margin-top: 16px;
  text-align: center;
`;

const CardWrapper = styled.div<{ bankId: number | undefined; onClick?: () => void }>`
  position: relative;
  transform-style: preserve-3d;
  transition: 0.5s ease-in-out;
  perspective: 600px;
  ${({ onClick }) =>
    onClick &&
    '  &:hover {transform: translate3D(0, -3%, 0) rotateY(180deg); box-shadow: rgba(0, 0, 33, 0.07) 0px 16px 22.4px 4.8px, rgba(0, 0, 33, 0.05) 0px 3.2px 16px 0px,rgba(0, 0, 33, 0.07) 0px 0px 1px 0px; cursor: pointer;}'}

  width: 214px;
  height: 134px;

  border-radius: 5px;

  background: ${({ bankId }) => (bankId ? BANK_COLOR_MAP[bankId].background : '#333333')};
  color: ${({ bankId }) => (bankId ? BANK_COLOR_MAP[bankId].color : 'white')};

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
`;

const CardBack = styled.div`
  position: absolute;

  transform: rotateY(180deg);

  width: 100%;
  height: 100%;
`;

const CardHead = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
`;

const BankName = styled.p`
  font-size: 11px;
  letter-spacing: 0.5px;
  display: flex;
`;

const CardMagnetic = styled.div`
  width: 100%;
  height: 32px;
  background-color: #191919;
  position: absolute;
  top: 25px;
  z-index: 10;
`;

const CardFront = styled.div<{ bankId: number | undefined }>`
  z-index: 11;
  position: absolute;

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  padding: 12px 18px;

  backface-visibility: hidden;

  background: ${({ bankId }) => (bankId ? BANK_COLOR_MAP[bankId].background : '#333333')};
  color: ${({ bankId }) => (bankId ? BANK_COLOR_MAP[bankId].color : 'white')};
`;

const CardChip = styled.div`
  position: absolute;
  left: 16px;
  top: 50px;
  background: #cbba64;
  border-radius: 4px;
  width: 40px;
  height: 26px;
`;

const CardNumberArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

const CardNumber = styled.p`
  font-size: 15px;
  letter-spacing: 0.5px;
  width: 21%;
`;

const CardInfoArea = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-top: 10px;

  font-size: 11px;
`;

const OwnerName = styled.p`
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ExpireDate = styled.p``;
