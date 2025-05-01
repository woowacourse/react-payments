import styled from '@emotion/styled';
import { VIEWPORT } from '../../constants/viewport';
import { MouseEventHandler } from 'react';

interface BottomButtonProps {
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function BottomButton({ label, onClick }: BottomButtonProps) {
  return <S.BottomButtonContainer onClick={onClick}>{label}</S.BottomButtonContainer>;
}

export default BottomButton;

const S = {
  BottomButtonContainer: styled.button`
    width: ${VIEWPORT.MOBILE}px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    &:hover {
      background-color: #222;
    }
  `,
};
