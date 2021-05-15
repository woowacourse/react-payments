import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';
import { getGrayScale } from '../../utils';

const baseWidth = '320px';
const baseHeight = '200px';

const scaleInfo = {
  small: 0.63,
  medium: 0.8,
  big: 1.0,
};

const Styled = {
  Container: styled.div`
    width: ${({ size }) => `calc(${baseWidth} * ${scaleInfo[size] || 'scale(1.0)'})`};
    height: ${({ size }) => `calc(${baseHeight} * ${scaleInfo[size] || 'scale(1.0)'})`};
    position: relative;
    margin: 0 auto;
  `,

  Card: styled.div`
    transform: ${({ size }) => `scale(${scaleInfo[size] || '1.0'})`};
    transform-origin: left top;
    width: ${baseWidth};
    height: ${baseHeight};
    border: none;
    border-radius: 7px;
    color: ${(props) => (getGrayScale(props.bgColor) ? '#ffffff' : props.theme.color.card)};
    background-color: ${(props) => props.bgColor};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    padding: 19px;
    position: relative;
    box-sizing: border-box;
  `,

  LabelText: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: ${(props) => props.theme.color.cardItem};
  `,

  Chip: styled.div`
    position: absolute;
    top: 60px;
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
    ${Flex({ justify: 'center', items: 'center' })};
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    bottom: 64px;
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
    max-width: 180px;
    word-break: break-all;
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
