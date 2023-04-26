import styled from 'styled-components';
import { LeftArrowButton, RightArrowButton } from '../../layout/ArrowButton';
import { ReactNode } from 'react';

interface Props {
  isLeftBtnShowed: boolean;
  isRightBtnShowed: boolean;
  viewPreviousInput?: () => void;
  viewNextInput?: () => void;
  progress: ReactNode;
}

export const MoveInput = ({
  isLeftBtnShowed,
  isRightBtnShowed,
  viewNextInput,
  viewPreviousInput,
  progress,
}: Props) => {
  return (
    <Style.Wrapper>
      <Style.ButtonWrapper>
        {isLeftBtnShowed && (
          <LeftArrowButton handleButtonClick={viewPreviousInput} />
        )}
      </Style.ButtonWrapper>
      {progress}
      <Style.ButtonWrapper>
        {isRightBtnShowed && (
          <RightArrowButton handleButtonClick={viewNextInput} />
        )}
      </Style.ButtonWrapper>
    </Style.Wrapper>
  );
};

const Style = {
  Wrapper: styled.div`
    width: 318px;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 20px;
  `,
  ButtonWrapper: styled.div`
    width: 50px;
    height: 50px;
  `,
};
