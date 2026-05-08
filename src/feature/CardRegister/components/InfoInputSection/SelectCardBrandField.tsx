import Select from 'react-select';
import styled from 'styled-components';
import { CARD_COMPANIES } from '../../constant/CARD_BRANDS';
import type { CardCompanyId } from '../../../../common/types/CardPreview';

const SelectCardBrandField = ({
  autoFocus = false,
  handleCardCompanyChange,
}: {
  autoFocus?: boolean;
  handleCardCompanyChange: (cardCompanyId: CardCompanyId | null) => void;
}) => {
  const cardCompanyOptions = CARD_COMPANIES.map((cardCompany) => ({
    value: cardCompany.id,
    label: cardCompany.name,
  }));

  return (
    <StyledField>
      <InputWrapper>
        <Select
          autoFocus={autoFocus}
          options={cardCompanyOptions}
          placeholder="카드사를 선택해주세요"
          onChange={(selectedOption) => {
            handleCardCompanyChange(selectedOption?.value ?? null);
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
      {/* <ErrorMessage>error</ErrorMessage> */}
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

// const CardBrandSelect = styled.select`
//   box-sizing: border-box;
//   width: 100%;
//   height: 32px;
//   padding: 5px;

//   border: 1px solid black;
//   border-radius: 3px;

//   font-size: 11px;
//   font-weight: 400;
// `;
// const ErrorMessage = styled.span`
//   min-height: 20px;
//   font-size: 9.5px;
//   font-weight: 400;
//   color: #ff3d3d;
// `;

export default SelectCardBrandField;
