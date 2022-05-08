import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  marginBottom?: string;
};

const dynamicStyle = (props: Props) => css`
  width: 208px;
  height: 130px;
  padding: 14px;
  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-bottom: ${props.marginBottom ? props.marginBottom : '0'};

  // type
  & .type {
    font-size: 10px;
    margin-bottom: 14px;
  }

  // chip
  & .chip {
    width: 40px;
    height: 26px;
    margin-bottom: 16px;

    background: #cbba64;
    border-radius: 4px;
  }

  // number
  & .number {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 6px;
    min-height: 16px;
  }

  // info
  & .info {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    align-items: center;
    .expired-period {
      letter-spacing: -1px;
    }
  }
`;

const Card = styled.div`
  ${dynamicStyle}
`;

export default Card;
