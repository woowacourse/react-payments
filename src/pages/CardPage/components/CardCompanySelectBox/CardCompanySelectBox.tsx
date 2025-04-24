import styled from '@emotion/styled';
import SelectBox from '../../../../components/SelectBox/SelectBox';
import { ChangeEvent } from 'react';

type CardCompanySelectProps = {
  value: string;
  onChange: ({ value }: { value: string }) => void;
  onComplete?: () => void;
  onValidityChange?: (isValid: boolean) => void;
};

const CardCompanySelectBox = ({
  value,
  onChange,
  onComplete,
  onValidityChange,
}: CardCompanySelectProps) => {
  const placeHolder = '카드사를 선택해주세요';
  const cardCompany = [
    'BC카드',
    '신한카드',
    '삼성카드',
    '현대카드',
    '롯데카드',
    '우리카드',
    '하나카드',
    'NH농협카드',
  ];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange({ value: e.target.value });
    onComplete && onComplete();
    onValidityChange && onValidityChange(true);
  };

  return (
    <StyledCardCompanySelectBox>
      <SelectBox
        placeHolder={placeHolder}
        values={cardCompany}
        value={value}
        onChange={handleChange}
      />
      <StyledHelperTextWrapper>
        {/* {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>} */}
      </StyledHelperTextWrapper>
    </StyledCardCompanySelectBox>
  );
};

export default CardCompanySelectBox;

const StyledCardCompanySelectBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;
