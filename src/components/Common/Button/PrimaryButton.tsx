import styled from '@emotion/styled';
import { ComponentProps } from 'react';

export default function PrimaryButton(props: ComponentProps<'button'>) {
  return <Button type="button" {...props} />;
}

const Button = styled.button`
  width: 320px;
  height: 44px;
  background: #333333;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
