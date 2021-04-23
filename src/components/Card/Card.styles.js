import styled from '@emotion/styled';
import { getGrayScale } from '../../utils';

const Styled = {
  Container: styled.div`
    padding: 19px;
    width: 293.08px;
    height: 183px;
    border: none;
    border-radius: 7px;
    color: ${(props) => (getGrayScale(props.bgColor) ? '#ffffff' : props.theme.color.card)};
    background: ${(props) => props.bgColor};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    position: relative;
  `,

  Chip: styled.div`
    position: absolute;
    top: 80px;
    width: 55px;
    height: 36px;
    background-color: #cbba64;
    border-radius: 7px;
  `,

  CompanyName: styled.span`
    font-size: 14px;
    position: absolute;
    top: 19px;
  `,

  CardNumbersGroup: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    bottom: 54px;
    left: 0;
    right: 0;
  `,

  CardNumbers: styled.span`
    & + & {
      margin-left: 0.6em;
    }
    letter-spacing: 0.14em;
  `,

  OwnerName: styled.span`
    position: absolute;
    bottom: 19px;
    letter-spacing: 0.1em;
  `,

  ExpiryDate: styled.span`
    position: absolute;
    bottom: 19px;
    right: 19px;
    text-align: right;
    letter-spacing: 0.1em;
  `,
};

export default Styled;
