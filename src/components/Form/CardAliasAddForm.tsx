import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from '../input/Input';
import { Button } from '../Button/Button';
import { CardViewer } from '../CardViewer';
import { cardDataService } from '../../domains/cardDataService';
import { isOverMaxLength } from '../../utils/validator';
import { CARD_ALIAS_SIZE, ERROR } from '../../constants';

export function CardAliasAddForm() {
  const [cardAlias, setCardAlias] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const cardId = location.state.cardId;
  const card = cardDataService.getCard(cardId);

  if (!card) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isOverMaxLength(e.target.value, CARD_ALIAS_SIZE)) {
      alert(ERROR.INVALID_CARD_ALIAS);

      e.target.value = '';
    }

    setCardAlias(e.target.value);
  };

  const handleAliasSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLFormElement)) return;

    cardDataService.addAliasToCard(card.id, e.target.alias.value);
    navigate('/');
  };

  return (
    <Style.Container>
      <CardViewer card={card} />
      <Style.Form onSubmit={handleAliasSubmit}>
        <Input
          value={cardAlias}
          designType='underline'
          name='alias'
          placeholder='카드 별칭을 입력해주세요.(선택)'
          maxLength={CARD_ALIAS_SIZE}
          autoFocus
          width={'240px'}
          height={'45px'}
          onChange={handleInputChange}
        />
        <Style.AliasLength aria-label='카드 별칭 입력 길이 표시'>
          {cardAlias.length}/{CARD_ALIAS_SIZE}
        </Style.AliasLength>
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

    position: relative;
    margin-top: 100px;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    margin-top: 270px;
  `,

  AliasLength: styled.span`
    position: absolute;
    top: 15px;
    left: 290px;

    font-size: 12px;
    color: #727272;
  `,
};
