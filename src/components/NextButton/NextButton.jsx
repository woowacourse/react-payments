import styled from 'styled-components';

export default function NextButton({ onClick, disabled, children, color }) {
  return (
    <Styled.NextButtonBox>
      <Styled.NextButton color={color} onClick={onClick} disabled={disabled}>
        {children}
      </Styled.NextButton>
    </Styled.NextButtonBox>
  );
}

const Styled = {
  NextButtonBox: styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    margin-left: auto;
  `,

  NextButton: styled.button`
    cursor: pointer;
    color: #fff;
    background-color: ${({ color }) => color};
    border: 0;
    font-weight: 700;
    font-size: 14px;
    border-radius: 8px;
    width: 50px;
    height: 35px;
    &:disabled {
      color: #fff;
      cursor: default;
      background-color: #e5e5e5;
    }
  `,
};
