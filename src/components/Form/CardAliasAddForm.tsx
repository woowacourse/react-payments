import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../input/Input';
import { Button } from '../Button/Button';
import { cardDataService } from '../../domains/cardDataService';
import { CardViewer } from '../CardViewer';

export function CardAliasAddForm() {
  const navigate = useNavigate();
  const recentRegisteredCard = cardDataService.getRecentRegisteredCard();
  const { cardCompany, cardNumber, expirationDate, ownerName } = recentRegisteredCard;

  const handleAliasSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    cardDataService.addAliasToRecentCard(e.target.alias.value);
    navigate('/');
  };

  return (
    <Style.Container>
      <CardViewer
        cardCompany={cardCompany}
        cardNumber={cardNumber}
        expirationDate={expirationDate}
        ownerName={ownerName}
      />
      <Style.Form onSubmit={handleAliasSubmit}>
        <Input
          designType='underline'
          name='alias'
          placeholder='카드 별칭을 입력해주세요.'
          width={'240px'}
          height={'45px'}
        />
        <Style.ButtonWrapper>
          <Button designType='text'>확인</Button>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Container>
  );
}

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
  `,

  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;
    margin-top: 100px;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    margin-top: 270px;
  `,
};
