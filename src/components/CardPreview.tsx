import styled from "styled-components";

const CardPreview = () => {
  return (
    <S.Card>
      <S.Chip />
      <S.CardInfo>
        <S.Numbers>
          1234 1234
          <S.Span>&nbsp;&nbsp;ㆍㆍㆍㆍ&nbsp;&nbsp;&nbsp;&nbsp;ㆍㆍㆍㆍ</S.Span>
        </S.Numbers>
        <S.Wrapper>
          <p>SUN</p>
          <p>04/21</p>
        </S.Wrapper>
      </S.CardInfo>
    </S.Card>
  );
};

const S = {
  Card: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 213px;
    height: 133px;
    padding: 0 15px;
    margin: 30px auto 20px;
    background: rgb(51, 51, 51);
    box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
    border-radius: 5px;
  `,

  Chip: styled.div`
    width: 40px;
    height: 26px;
    background: #cbba64;
    border-radius: 4px;
  `,

  CardInfo: styled.div`
    color: #fff;
    font-size: 14px;
  `,

  Numbers: styled.p`
    margin: 12px 0 10px;
    letter-spacing: 2px;
  `,

  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
  `,

  Span: styled.span`
    letter-spacing: -2px;
  `,
};
export default CardPreview;
