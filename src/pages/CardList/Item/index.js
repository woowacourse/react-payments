import { useState } from 'react';
import { Card } from '../../../components';
import { CARD_COMPANY } from '../../../constants';
import './style.css';

export default function Item({ card, onUpdateCard, onDeleteCard }) {
  const [nickName, setNickName] = useState(card.nickName);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onChangeNickName = (value) => {
    setNickName(value);
  };

  return (
    <ul className="card-list__item">
      <Card
        {...card}
        companyName={CARD_COMPANY[card.cardCompany].NAME}
        color={CARD_COMPANY[card.cardCompany].COLOR}
      />
      <form
        className="card-item__form"
        onSubmit={(event) => {
          event.preventDefault();

          onUpdateCard({ ...card, nickName });
        }}
        onMouseOver={() => {
          setIsMouseOver(true);
        }}
        onMouseOut={() => {
          setIsMouseOver(false);
        }}
      >
        <input
          className="form__nick-name"
          value={nickName}
          onChange={({ target: { value } }) => {
            onChangeNickName(value);
          }}
        />
        <div className="form__button-controls">
          <button className={['form__nick-name-submit', !isMouseOver && '--hidden'].join(' ')}>
            변경
          </button>
          <button
            className={['form__nick-name-delete', !isMouseOver && '--hidden'].join(' ')}
            type="button"
            onClick={() => {
              onDeleteCard(card.serialNumber);
            }}
          >
            삭제
          </button>
        </div>
      </form>
    </ul>
  );
}
