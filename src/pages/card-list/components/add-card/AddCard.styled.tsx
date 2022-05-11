import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  marginBottom: string;
};

const dynamicStyle = (props: Props) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 130px;
  min-height: 130px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #dbdbdb;
  margin-bottom: ${props.marginBottom ? props.marginBottom : '0'};
  cursor: pointer;
  &::after {
    content: '+';
    font-size: 30px;
    font-weight: 900;
  }
  transition: transform 0.35s;
  &:hover {
    transform: scale(1.06, 1.06);
  }
`;

const AddCard = styled.button`
  ${dynamicStyle}
`;

export default AddCard;
