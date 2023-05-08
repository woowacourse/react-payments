import styled from 'styled-components';
import { BankCode, CardName } from '../Card/types';
import { KumaModal } from 'kuma-modal';
import { KumaModalProps } from 'kuma-modal/dist/KumaModal';

export type CardBottomSheetProps = {
  onClickBankImage: (bankCode: BankCode) => void;
} & KumaModalProps;

const bankCodes = Object.values(BankCode);

export const CardBottomSheet = ({ onClickBankImage, active }: CardBottomSheetProps) => {
  const handleClickBankImage = (bankCode: BankCode) => {
    onClickBankImage(bankCode);
  };

  return (
    <KumaModal active={active}>
      <ContentContainer>
        {bankCodes.map((bankCode, index) => {
          if (bankCode === BankCode.Default) return null;
          return (
            <CardImageContainer key={index} onClick={() => handleClickBankImage(bankCode)}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/bank/${CardName[bankCode]}.svg`}
                alt={`${CardName[bankCode]}`}
              ></img>
              <span>{CardName[bankCode]}</span>
            </CardImageContainer>
          );
        })}
      </ContentContainer>
    </KumaModal>
  );
};

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  padding: 30px;
  width: calc(375px - 40px);
  margin: 0 auto;
  font-size: 12px;
`;

const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  cursor: pointer;
  span {
    white-space: nowrap;
  }
`;
