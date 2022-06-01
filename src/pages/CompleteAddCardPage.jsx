import React, { useContext, useRef, useState } from 'react';

import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import { CardContext } from '../contexts/CardContext';

import CardPreview from '../components/common/CardPreview';
import TextBox from '../components/common/TextBox';
import Input from '../components/common/Input';
import Button from '../components/common/Button';

import { DEFAULT_CARD_NAME, ERROR_MESSAGE, PATH } from '../utils/constants';

import useFetch from '../hooks/useFetch';

const StyledCompleteAddCardPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: 'center';
  align-items: 'center';

  .text-box {
    margin: 114px 17px 77px;
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
  const { values, setValues, initialField } = useContext(CardContext);

  const inputRef = useRef();

  const navigation = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { error: errorWithPosting, fetch: fetchPostCard } = useFetch('post');

  const storeCard = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const cardInfo = {
      cardName:
        inputRef.current.value.toUpperCase() ||
        values.owner.toUpperCase() ||
        DEFAULT_CARD_NAME,
      values,
    };

    await fetchPostCard({
      API_URL: `${process.env.REACT_APP_CARD_API}/cards`,
      body: cardInfo,
    });

    if (errorWithPosting) {
      alert(ERROR_MESSAGE.FAILED_POST);
      return;
    }

    setValues(initialField);
    setIsSubmitting(false);
  };

  return (
    <StyledCompleteAddCardPage>
      <TextBox fontSize="23px">카드등록이 완료되었습니다.</TextBox>
      <CardPreview values={values} size="large" />
      <Input
        underLine
        placeHolder="카드 별칭을 지정해주세요."
        innerRef={inputRef}
      />
      <Button
        onClick={async () => {
          await storeCard();
          navigation(PATH.HOME);
        }}
      >
        확인
      </Button>
    </StyledCompleteAddCardPage>
  );
};

export default CompleteAddCardPage;
