import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';
import { getGrayScale } from '../../utils';

const Styled = {
  Container: styled.div`
    padding: 19px;

    transform: ${({ size }) => {
      const info = {
        small: 'scale(0.63);',
        medium: 'scale(0.8);',
      };

      return `${info[size] || 'scale(1.0)'};`;
    }};

    width: 320px;
    height: 200px;
    border: none;
    border-radius: 7px;
    color: ${(props) => (getGrayScale(props.bgColor) ? '#ffffff' : props.theme.color.card)};
    background: ${(props) => props.bgColor};
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
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
