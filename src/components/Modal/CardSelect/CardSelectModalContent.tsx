import styled from 'styled-components';
import { CardCompanyItem } from './CardCompanyItem';
import { CARD_COMPANY, CARD_SELECT_COMPLETE_BUTTON } from '../../../constants';
import { CardCompany } from '../../../types';
import { Button } from '../../Button/Button';

interface Props {
  setCardCompany: (input: CardCompany) => void;
  closeModal: () => void;
}

export function CardSelectModalContent({ setCardCompany, closeModal }: Props) {
  const cardCompanies = Object.values(CARD_COMPANY);

  return (
    <>
      <Style.Title id='title-dialog'>카드사를 선택해주세요.</Style.Title>
      <Style.GridContainer>
        {cardCompanies.map((cardCompany) => {
          const { name, logo } = cardCompany;

          return (
            <CardCompanyItem key={name} name={name} logo={logo} setCardCompany={setCardCompany} />
          );
        })}
      </Style.GridContainer>
      <Style.ButtonWrapper>
        <Button
          type={'button'}
          onClick={closeModal}
          width={'100%'}
          height={'45px'}
          backgroundColor=' #75c4d2;'
          fontSize={'14px'}
        >
          {CARD_SELECT_COMPLETE_BUTTON}
        </Button>
      </Style.ButtonWrapper>
    </>
  );
}

const Style = {
  Title: styled.h2`
    width: 368px;
    margin-left: 10px;
    margin-bottom: 20px;

    font-size: 16px;
    font-weight: 600;
  `,

  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  GridContainer: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, calc(80% / 4));
    grid-column-gap: calc(20% / 3);
    grid-row-gap: 20px;

    width: 368px;
    list-style: none;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: center;

    width: 368px;
    margin-top: 20px;

    font-size: 20px;

    cursor: pointer;
  `,
};
