import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CardContext from '../../contexts/CardContext';
import CardPreview from '../common/CardPreview';
import TextBox from '../common/TextBox';
import Input from '../common/Input';
import Button from '../common/Button';

const StyledCompleteAddCardPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: 'center';

  .text-box {
    margin: 114px 17px 77px;
  }

  .small-card {
    width: 293px;
    height: 183px;
    margin: 0px 17px 33px;
  }

  .input-box {
    margin: 0 43px;
  }

  .button {
    position: absolute;
    width: 51px;
    height: 34px;
    right: 25px;
    bottom: 16px;
  }
`;

const CompleteAddCardPage = () => {
  const [cardName, setCardName] = useState('');
  const { values, setValues, initialField } = useContext(CardContext);

  const storeCard = async () => {
    const cardInfo = {
      cardName:
        cardName.toUpperCase() || values.owner.toUpperCase() || '기본 카드',
      values,
    };

    const response = await fetch('http://localhost:4000/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardInfo),
    });

    if (!response.ok) {
      alert('저장 실패에 실패했습니다. 관리자에게 문의하세요.');
      return;
    }
    setValues(initialField);
  };

  return (
    <StyledCompleteAddCardPage>
      <TextBox fontSize="23px">카드등록이 완료되었습니다.</TextBox>
      <CardPreview values={values} />
      <Input
        underLine
        placeHolder="카드 별칭을 지정해주세요."
        onChange={(e) => {
          setCardName(e.target.value.trim());
        }}
      />
      <Link to="/">
        <Button
          onClick={async () => {
            await storeCard();
          }}
        >
          확인
        </Button>
      </Link>
    </StyledCompleteAddCardPage>
  );
};

export default CompleteAddCardPage;
