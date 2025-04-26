import styled from '@emotion/styled';
import { useCallback } from 'react';
import {
  NumberInfo,
  CVCNumberInfo,
  ExpirationPeriodInfo,
  PasswordInfo,
} from '../../types/models';

interface InputTextsProps {
  label: string;
  dataModels:
    | NumberInfo[]
    | ExpirationPeriodInfo[]
    | CVCNumberInfo
    | PasswordInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputTexts = ({
  label,
  dataModels,
  onChange,
  onFocus,
  onBlur,
  type = 'text',
}: InputTextsProps) => {
  const onChangeAt = useCallback(
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
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
              type={type}
              placeholder={data.placeholder}
              maxLength={data.numberSegmentLength}
              value={data.number}
              onChange={onChangeAt(index)}
              onFocus={onFocus}
              onBlur={onBlur}
              isError={data.isError}
            />
          ))
        ) : (
          <Input
            type={type}
            placeholder={dataModels.placeholder}
            maxLength={dataModels.numberSegmentLength}
            value={dataModels.number}
            onChange={onChangeAt(0)}
            onFocus={onFocus}
            onBlur={onBlur}
            isError={dataModels.isError}
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
