import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './RegisterLodingPage.styles';

const RegisterLoadingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <Styled.Root>
        <Styled.SpinnerWrapper>
          <Styled.Spinner />
          <Styled.SpinnerText>카드를 등록중입니다...</Styled.SpinnerText>
        </Styled.SpinnerWrapper>
      </Styled.Root>
    );
  }

  return (
    <Styled.Root>
      <Styled.SpinnerWrapper>
        <Styled.Checkmark viewBox='0 0 52 52'>
          <path fill='none' stroke='#007aff' strokeWidth='5' d='M14,27l7.8,7.8L38,17' />
        </Styled.Checkmark>
        <Styled.SuccessWrapper>
          <Styled.SpinnerText>카드 등록 성공!</Styled.SpinnerText>
          <Link to='/'>
            <Styled.Button>확인</Styled.Button>
          </Link>
        </Styled.SuccessWrapper>
      </Styled.SpinnerWrapper>
    </Styled.Root>
  );
};

export default RegisterLoadingPage;
