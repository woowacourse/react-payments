import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import CardListContainer from 'containers/card/CardListContainer';
import SliderButtonContainer from 'containers/button/SliderButtonContainer';

import {
  CardListContainerStyled,
  CardPaySubTitleStyled,
  FlexWrapper,
  MarginWrapper,
  PageWrapper,
  PayButtonStyled,
  TermStyled,
  TitleWrapper,
  TotalPayStyled,
} from './style';

function CardPayPage({ totalAccount }: any) {
  const CardListSliderRef = useRef<HTMLDivElement>(null);
  const CardLocationRef = useRef<number>(0);

  return (
    <PageWrapper>
      <TitleWrapper>KYOUL PAY | 결제</TitleWrapper>
      <FlexWrapper alignItems="center">
        <SliderButtonContainer
          type="left"
          cardListSlider={CardListSliderRef}
          cardLocation={CardLocationRef}
        />
        <CardListContainerStyled>
          <CardListContainer flexDirection="row" marginRight="30px" ref={CardListSliderRef} />
        </CardListContainerStyled>
        <SliderButtonContainer
          type="right"
          cardListSlider={CardListSliderRef}
          cardLocation={CardLocationRef}
        />
      </FlexWrapper>
      <MarginWrapper marginBottom="70px" />

      <CardPaySubTitleStyled>결제금액</CardPaySubTitleStyled>
      <MarginWrapper marginBottom="30px" />
      <FlexWrapper justifyContent="space-between">
        <TotalPayStyled>총 결제금액</TotalPayStyled>
        <TotalPayStyled>{totalAccount}원</TotalPayStyled>
      </FlexWrapper>
      <MarginWrapper marginBottom="50px" />

      <CardPaySubTitleStyled>약관 이용 및 동의</CardPaySubTitleStyled>
      <MarginWrapper marginBottom="30px" />
      <FlexWrapper alignItems="center">
        <TermStyled>거래정보 제공 동의 woowa store&nbsp;</TermStyled>
        <Link to="/card">상세보기</Link>
      </FlexWrapper>
      <MarginWrapper marginBottom="20px" />
      <FlexWrapper justifyContent="space-between" alignItems="center">
        <TermStyled>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</TermStyled>
        <input type="checkbox" />
      </FlexWrapper>
      <MarginWrapper marginBottom="30px" />
      <FlexWrapper justifyContent="space-between">
        <Link to="/">
          <PayButtonStyled>결제하기</PayButtonStyled>
        </Link>
        <Link to="/">
          <PayButtonStyled>취소하기</PayButtonStyled>
        </Link>
      </FlexWrapper>
    </PageWrapper>
  );
}

export default CardPayPage;
