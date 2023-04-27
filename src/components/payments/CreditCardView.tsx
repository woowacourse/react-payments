import type { ReactNode } from 'react';
import styled from 'styled-components';
import type { CreditCard } from '../../domain/CreditCard';
import { Color } from '../../utils/Color';
import { Text } from '../common/Text';

type PropsWithColor<T = unknown> = T & {
  $color: string;
};

type CreditCardFacesProps = {
  $showBackface?: boolean;
};

const CreditCardFaces = styled.div<CreditCardFacesProps>`
  position: relative;

  width: 200px;
  height: 130px;

  transition: transform 0.3s;
  transform: ${(props) =>
    props.$showBackface
      ? 'perspective(900px) rotateY(180deg)'
      : 'perspective(900px) rotateY(0deg)'};
  transform-style: preserve-3d;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const CreditCardFrontFace = styled.div<PropsWithColor>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;

  padding: 14px;

  border-radius: 4px;

  background: ${(props) => props.$color};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  color: white;
  font-weight: ${(props) => props.theme.fontWeight.bold};

  backface-visibility: hidden;
`;

const CardVendor = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: auto;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  border-radius: 4px;

  background: #cbba64;
`;

const CardNumber = styled.div`
  display: flex;
  gap: 10px;
  letter-spacing: 2px;

  height: 12px;
`;

const CardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;
`;

const CreditCardBackFace = styled(CreditCardFrontFace)<PropsWithColor>`
  justify-content: flex-start;
  background: ${(props) => props.$color};

  transform: rotateY(180deg);
`;

const Magnet = styled.div`
  margin-top: 4px;
  height: 20px;

  margin: 0 -14px;

  background: black;
`;

const Authorization = styled.div`
  display: flex;

  margin-top: 8px;

  height: 24px;
`;

const SignArea = styled.div`
  flex: 1;
  padding: 2px 8px;
  padding-left: 20px;

  background: #f5f5f5;
  color: grey;
  font-size: 10px;
  font-weight: normal;
`;

const SignAreaDescription = styled.div`
  font-size: 10px;
  font-weight: lighter;
  line-height: 12px;

  transform: scale(0.7);
  transform-origin: 100% 0%;

  & > div {
    display: flex;
    justify-content: space-between;
  }
`;

type CreditCardViewProps = Pick<CreditCard, 'owner' | 'vendor' | 'cardNumbers' | 'expirationDate'> &
  Partial<Pick<CreditCard, 'cvc'>> & {
    color?: string;
    icon?: ReactNode;
    showBackface?: boolean;
  };

export const CreditCardView = (props: CreditCardViewProps) => {
  const {
    owner,
    vendor,
    cardNumbers,
    expirationDate,
    cvc,
    color: hexColor = '#333333',
    icon,
    showBackface,
  } = props;
  const color = Color.fromHex(hexColor).adjustSaturation(10);

  const getPartialCardNumber = (index: number) => {
    const partialCardNumber = cardNumbers.split('-')[index] ?? '';

    return [0, 1].includes(index) ? partialCardNumber : partialCardNumber.replaceAll(/\d/g, '•');
  };

  const partialCardNumbers = [0, 1, 2, 3].map(getPartialCardNumber);

  return (
    <CreditCardFaces $showBackface={showBackface}>
      <CreditCardFrontFace $color={color.adjustLightness(-5).toString()}>
        <CardVendor>
          <Text size="small">{vendor}</Text>

          {icon}
        </CardVendor>

        <ICChip />
        <CardNumber>
          {partialCardNumbers.map((partialCardNumber, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Text size="small" key={index}>
              {partialCardNumber}
            </Text>
          ))}
        </CardNumber>
        <CardAdditionalInfo>
          <Text size="small" weight="bold">
            {owner}
          </Text>
          {expirationDate.some(Boolean) && (
            <Text size="small" weight="bold">
              {expirationDate.join('/')}
            </Text>
          )}
        </CardAdditionalInfo>
      </CreditCardFrontFace>
      <CreditCardBackFace $color={color.adjustLightness(10).toString()}>
        <Magnet />
        <Authorization>
          <SignArea>●●●● {cvc?.replaceAll(/./g, '●') ?? ''}</SignArea>
          <SignAreaDescription>
            {['서명', 'AUTHORIZED', 'SIGNATURE'].map((line) => (
              // eslint-disable-next-line react/jsx-key
              <div>
                {line.split('').map((char) => (
                  // eslint-disable-next-line react/jsx-key
                  <span>{char}</span>
                ))}
              </div>
            ))}
          </SignAreaDescription>
        </Authorization>
      </CreditCardBackFace>
    </CreditCardFaces>
  );
};
