import { useCardForm } from '../../context/cardForm';
import type { CardType } from '../../types';
import styled from 'styled-components';

interface Props {
  closeModal: () => void;
}

const Modal = ({ closeModal }: Props) => {
  const [, dispatch] = useCardForm();

  const onClickCardCompanyItem = (cardCompany: CardType['cardCompany']) => () => {
    dispatch({ type: 'SET_VALUE', key: 'cardCompany', value: cardCompany });
    closeModal();
  };

  return (
    <>
      <ModalBackdrop />
      <ModalWrapper>
        {CARD_COMPANY_MATRIX.map((row) => (
          <CardCompanyRow>
            {row.map(({ iconSrc, cardCompany }) => (
              <CardCompanyItem onClick={onClickCardCompanyItem(cardCompany)}>
                <img src={iconSrc} alt={cardCompany} />
                <p>{cardCompany}</p>
              </CardCompanyItem>
            ))}
          </CardCompanyRow>
        ))}
      </ModalWrapper>
    </>
  );
};

export default Modal;

const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: auto;
  border-radius: 6px 6px 0px 0px;
  padding: 34px 48px;

  background: white;
`;

const CardCompanyRow = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 26px;
  }
`;

const CardCompanyItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 54px;
  height: 70px;

  cursor: pointer;

  img {
    width: 38px;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    color: #525252;
  }
`;

const CARD_COMPANY_MATRIX = [
  [
    {
      iconSrc: './icons/BC카드.svg',
      cardCompany: 'BC카드',
    },
    {
      iconSrc: './icons/신한카드.svg',
      cardCompany: '신한카드',
    },
    {
      iconSrc: './icons/카카오뱅크.svg',
      cardCompany: '카카오뱅크',
    },
    {
      iconSrc: './icons/현대카드.svg',
      cardCompany: '현대카드',
    },
  ],
  [
    {
      iconSrc: './icons/우리카드.svg',
      cardCompany: '우리카드',
    },
    {
      iconSrc: './icons/롯데카드.svg',
      cardCompany: '롯데카드',
    },
    {
      iconSrc: './icons/하나카드.svg',
      cardCompany: '하나카드',
    },
    {
      iconSrc: './icons/국민카드.svg',
      cardCompany: '국민카드',
    },
  ],
];
