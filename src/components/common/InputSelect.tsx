import styled from '@emotion/styled';
import { ChangeEvent, RefObject } from 'react';

const SELECT_OPTIONS = [
  { value: 'BC', label: 'BC카드' },
  { value: '신한', label: '신한카드' },
  { value: '카카오', label: '카카오뱅크' },
  { value: '현대', label: '현대카드' },
  { value: '우리', label: '우리카드' },
  { value: '롯데', label: '롯데카드' },
  { value: '하나', label: '하나카드' },
  { value: '국민', label: '국민카드' },
] as const;

interface InputSelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  inputRef: RefObject<HTMLSelectElement | null>;
}

const InputSelect = ({ value, onChange, inputRef }: InputSelectProps) => {
  return (
    <InputSelectContainer>
      <Row>
        <Select value={value} onChange={onChange} ref={inputRef}>
          <option value="" disabled hidden>
            카드사를 선택해주세요
          </option>
          {SELECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </Row>
    </InputSelectContainer>
  );
};

export default InputSelect;

const InputSelectContainer = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  min-width: 100%;
  gap: 10px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  font-size: ${({ theme }) => theme.fontSizes.label};
  outline: none;

  &:focus {
    outline: 2px solid skyblue;
  }
`;
