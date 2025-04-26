import styled from '@emotion/styled';

interface InputSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect = ({ value, onChange }: InputSelectProps) => {
  return (
    <InputSelectContainer>
      <Row>
        <Select value={value} onChange={onChange}>
          <option value="" disabled hidden>
            카드사를 선택해주세요
          </option>
          <option value="BC">BC카드</option>
          <option value="신한">신한카드</option>
          <option value="카카오">카카오뱅크</option>
          <option value="현대">현대카드</option>
          <option value="우리">우리카드</option>
          <option value="롯데">롯데카드</option>
          <option value="하나">하나카드</option>
          <option value="국민">국민카드</option>
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
`;
