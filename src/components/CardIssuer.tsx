import type { ChangeEvent } from 'react';
import type { CardIssuerType } from '../types/cardStausTypes';

type CardIssuerProps = {
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
};

export default function CardIssuer({ cardIssuer, handleCardIssuer }: CardIssuerProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleCardIssuer(e.target.value as CardIssuerType);
  };

  return (
    <div css={{ display: 'flex', flexDirection: 'column', padding: 0, marginBottom: '16px' }}>
      <label
        htmlFor="cardIssuer"
        css={(theme) => ({
          ...theme.typography.title,
          color: theme.colors.black,
          padding: 0,
        })}
      >
        카드사를 선택해 주세요
      </label>
      <p
        css={(theme) => ({
          ...theme.typography.caption,
          color: theme.colors.description,
          marginBottom: '16px',
        })}
      >
        현재 국내 카드사만 가능합니다.
      </p>

      <select
        id="cardIssuer"
        name="cardIssuer"
        css={(theme) => ({
          width: '100%',
          height: '32px',
          border: `1px solid ${theme.colors.inactiveBorder}`,
          borderRadius: '3px',
          color: cardIssuer ? theme.colors.black : theme.colors.inactiveBorder,

          '&:focus': {
            borderColor: theme.colors.black,
            color: theme.colors.black,
            outline: 'none',
          },
        })}
        value={cardIssuer}
        onChange={handleChange}
        autoFocus
      >
        <option value="" disabled>
          카드사를 선택해주세요
        </option>
        <option value="bcCard">BC카드</option>
        <option value="shCard">신한카드</option>
        <option value="kakaoCard">카카오뱅크</option>
        <option value="hyundaiCard">현대카드</option>
        <option value="wooriCard">우리카드</option>
        <option value="lotteCard">롯데카드</option>
        <option value="hanaCard">하나카드</option>
        <option value="kbCard">국민카드</option>
      </select>
    </div>
  );
}
