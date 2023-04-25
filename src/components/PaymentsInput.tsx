import styled, { css } from 'styled-components';
import NamedInputListBox from './Common/Input/NamedInputListBox';

type PaymentsInputProps = React.ComponentPropsWithoutRef<typeof NamedInputListBox> & {
  errorMessage?: string;
  isVisited?: boolean;
};

function PaymentsInput({
  inputListInformation,
  name,
  id,
  errorMessage,
  showNumberOfValue = false,
  isVisited,
}: PaymentsInputProps) {
  return (
    <StyledPaymentsInput isBlankBridge={inputListInformation.bridgeLetter === ''}>
      <NamedInputListBox
        inputListInformation={inputListInformation}
        name={name}
        id={id}
        showNumberOfValue={showNumberOfValue}
      />
      <p>{isVisited && errorMessage}</p>
    </StyledPaymentsInput>
  );
}

const StyledPaymentsInput = styled.div<{ isBlankBridge: boolean }>`
  display: flex;
  flex-direction: column;
  max-width: 318px;

  & > label,
  & > p {
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    align-items: center;
    letter-spacing: -0.085em;
    color: #525252;
    margin-bottom: 8px;
  }

  & > p {
    margin: 4px 0 0 0;
    color: red;
    white-space: nowrap;
    height: 14px;
  }

  & > div > div:first-child {
    display: flex;
    ${({ isBlankBridge }) =>
      isBlankBridge
        ? css`
            & > input {
              background: #ecebf1;
              min-width: 46px;
              border-radius: 7px;
              margin-right: 8px;
              height: 46px;
              font-size: 18px;
              letter-spacing: 0.0625rem;
              ::placeholder {
                letter-spacing: -0.085em;
              }
            }
          `
        : css`
            background: #ecebf1;
            padding: 0 12px;
            justify-content: center;
            align-items: center;
            width: 100%;
            border-radius: 7px;
            height: 46px;
            & > input {
              font-size: 18px;
              letter-spacing: 0.0625rem;
              ::placeholder {
                letter-spacing: -0.085em;
              }
            }
          `};
  }

  & > div > *:nth-child(n + 1) {
    display: flex;
    min-width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
  }
`;

export default PaymentsInput;
