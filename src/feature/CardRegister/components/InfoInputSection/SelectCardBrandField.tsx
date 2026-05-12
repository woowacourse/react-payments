import Select from 'react-select';
import styled from 'styled-components';
import type { CardCompanyFieldType } from '../../hooks/useCardCompanyField';

const SelectCardBrandField = ({
  autoFocus = false,
  field,
}: {
  autoFocus?: boolean;
  field: CardCompanyFieldType;
}) => {
  return (
    <StyledField>
      <InputWrapper>
        <Select
          autoFocus={autoFocus}
          options={field.cardCompanyOptions}
          placeholder="카드사를 선택해주세요"
          onChange={(selectedOption) => {
            field.handleChange(selectedOption.value ?? null);
          }}
          styles={{
            control: (base, state) => ({
              ...base,
              minHeight: '32px',
              borderColor: state.isFocused ? '#000000' : '#ACACAC',
              borderWidth: '1px',
              borderRadius: '5px',
              boxShadow: 'none',
              cursor: 'pointer',

              fontSize: '11px',
            }),

            placeholder: (base) => ({
              ...base,
            }),

            singleValue: (base) => ({
              ...base,
              color: '#4f4f4f',
            }),

            option: (base, state) => ({
              ...base,
              backgroundColor: state.isFocused ? '#f5f5f5' : '#ffffff',
              color: '#4f4f4f',
              cursor: 'pointer',
              fontSize: '11px',
            }),

            indicatorSeparator: () => ({
              display: 'none',
            }),
          }}
        />
      </InputWrapper>
    </StyledField>
  );
};
const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 14px;

  margin-bottom: 20px;
`;

export default SelectCardBrandField;
