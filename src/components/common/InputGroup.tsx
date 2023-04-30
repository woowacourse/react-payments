import styled, { css } from 'styled-components';

type InputInfo = {
  type: string;
  placeholder?: string;
  minLength: number;
  maxLength: number;
  width: string;
  value?: string;
  center: boolean;
  onChange: (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputGroupProps = {
  labelText: string;
  insert?: (element: HTMLElement | null) => void;
  autofocus: boolean;
  inputInfoList: InputInfo[];
  children?: React.ReactNode;
};

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  textCenter: boolean;
}

const InputGroup = ({ labelText, inputInfoList, children, autofocus, insert }: InputGroupProps) => {
  return (
    <StyledInputGroupWrapper>
      <StyledInputLabel>
        <StyledInputLabelContainer>
          <span>{labelText}</span>
          <div>{children}</div>
        </StyledInputLabelContainer>
        <StyledInputListWrapper>
          {inputInfoList.map(
            (
              { type, placeholder, minLength, maxLength, width, value, center, onChange },
              index,
            ) => {
              return (
                <StyledInput
                  key={index}
                  pattern={`.{${minLength},}`}
                  required={minLength !== 0}
                  type={type === 'number' ? 'text' : type}
                  name={`${labelText}${index}`}
                  maxLength={maxLength}
                  width={width}
                  placeholder={placeholder}
                  value={value}
                  textCenter={center}
                  ref={autofocus ? insert : null}
                  onChange={(e) => {
                    onChange(index)(e);
                  }}
                />
              );
            },
          )}
        </StyledInputListWrapper>
      </StyledInputLabel>
    </StyledInputGroupWrapper>
  );
};

const StyledInputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 7px;
  color: #525252;
`;

const StyledInput = styled.input<InputProps>`
  width: ${({ width }) => width};
  height: 45px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #525252;
  padding: 12px;
  ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `}
`;

const StyledInputListWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

const StyledInputLabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default InputGroup;
