import SelectBox from '../../../../components/SelectBox/SelectBox';
import { ChangeEvent } from 'react';
import { CARD_COMPANY, CARD_COMPANY_PLACEHOLDER } from '../../../../constants/settings';
import { StyledCardCompanySelectBox } from './CardCompanySelectBox.styles';

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
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange({ value: e.target.value });
    onComplete?.();
    onValidityChange?.(true);
  };

  return (
    <StyledCardCompanySelectBox>
      <SelectBox
        placeHolder={CARD_COMPANY_PLACEHOLDER}
        values={CARD_COMPANY}
        value={value}
        onChange={handleChange}
      />
    </StyledCardCompanySelectBox>
  );
};

export default CardCompanySelectBox;
