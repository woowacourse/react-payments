import styled from 'styled-components';

type Props = {};

export function CreditCard({}: Props) {
  return (
    <Styled.Wrapper>
      <Styled.Chip />
      <Styled.CardNumbers>
        <span>1234</span>
        <span>1234</span>
        <span>••••</span>
        <span>••••</span>
      </Styled.CardNumbers>
      <Styled.Container>
        <Styled.Name>PARK YEONG YEONG</Styled.Name>
        <Styled.ExpirationDate>04/21</Styled.ExpirationDate>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

const Styled = {
  Wrapper: styled.div`
    position: relative;
    width: 213px;
    height: 133px;
    left: 81px;
    top: 75px;

    background: #333333;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  `,
  Chip: styled.div`
    position: absolute;
    width: 40px;
    height: 26px;
    left: 14px;
    top: 47px;

    background: #cbba64;
    border-radius: 4px;
  `,

  CardNumbers: styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 169px;
    height: 10px;
    left: 19px;
    top: 84px;

    span {
      color: #ffffff;
      font-size: 14px;
    }
  `,
  Container: styled.div`
    position: absolute;
    width: 169px;
    height: 10px;
    left: 19px;
    top: 107px;
    display: flex;
    justify-content: space-between;
  `,
  Name: styled.span`
    color: #ffffff;
    font-size: 12px;
  `,
  ExpirationDate: styled.span`
    color: #ffffff;
    font-size: 12px;
  `,
};
