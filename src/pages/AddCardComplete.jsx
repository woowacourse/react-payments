import styled from 'styled-components';

import { Link } from 'react-router-dom';

import Card from 'components/common/Card';
import Button from 'components/common/Button';

function AddCardComplete() {
  return (
    <Styled.Root>
      <Styled.Title>카드 등록이 완료되었습니다.</Styled.Title>
      <Card
        size="large"
        // bgColor={cardKind.color}
        // name={cardOwnerName}
        // number={encryptedCardNumber}
        // title={cardKind.title}
        // validDate={validDate}
      />
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <Styled.CardNicknameInput />
        <Styled.ConfirmButton color="#04C09E" fontWeight="bold" type="submit">
          확인
        </Styled.ConfirmButton>
      </form>
    </Styled.Root>
  );
}

const Styled = {
  Root: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 697px;
    justify-content: center;
    position: relative;
    row-gap: 50px;
  `,

  Title: styled.h1`
    font-size: 24px;
    font-weight: normal;
  `,

  CardNicknameInput: styled.input`
    border: none;
    border-bottom: 1px solid black;
    font-size: 18px;
    padding-bottom: 8px;
    text-align: center;
    width: 241px;

    :focus {
      outline: none;
    }
  `,

  ConfirmButton: styled(Button)`
    bottom: 0;
    position: absolute;
    right: 0;
  `,
};

export default AddCardComplete;
