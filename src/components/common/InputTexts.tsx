import styled from '@emotion/styled';
import { ChangeEvent, FocusEvent, RefObject, useCallback } from 'react';
import { InputFieldState } from '../../types/models';

interface InputTextsProps {
  label: string;
  dataModels: InputFieldState | InputFieldState[];
  onChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  type?: string;
  inputRefs?: RefObject<HTMLInputElement | null>[];
}

const InputTexts = ({
  label,
  dataModels,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
  inputRefs,
}: InputTextsProps) => {
  const onChangeAt = useCallback(
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e, index);
    },
    []
  );

  return (
    <InputTextsContainer>
      <Label>{label}</Label>
      <Row>
        {Array.isArray(dataModels) ? (
          dataModels.map((data, index) => (
            <Input
              key={index}
              ref={inputRefs ? inputRefs[index] : null}
              type={type}
              placeholder={data.placeholder}
              maxLength={data.maximumLength}
              value={data.value}
              onChange={onChangeAt(index)}
              onFocus={onFocus}
              onBlur={onBlur}
              isError={data.hasError}
              autoComplete="off"
            />
          ))
        ) : (
          <Input
            type={type}
            placeholder={dataModels.placeholder}
            maxLength={dataModels.maximumLength}
            value={dataModels.value}
            onChange={onChangeAt(0)}
            onFocus={onFocus}
            onBlur={onBlur}
            isError={dataModels.hasError}
            autoComplete="off"
          />
        )}
      </Row>
    </InputTextsContainer>
  );
};

export default InputTexts;

const InputTextsContainer = styled.div`
  width: 100%;
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.label};
  line-height: 15px;
  margin-bottom: 8px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  min-width: 100%;
  gap: 10px;
`;

const Input = styled.input<{ isError: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.error : theme.colors.border};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.fontSizes.label};
  outline: none;
`;
