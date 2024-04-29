import { ErrorText, ErrorWrapper } from '../styles/common';
import { ErrorDetail } from '../types/error';
import Dropdown from './common/dropdown/Dropdown';
import DropdownField from './common/dropdownField/DropdownField';

interface CardCompanyContainerProps {
  value: string;
  handleSelect: (e: React.MouseEvent<HTMLLIElement>) => void;
  errorInfo?: ErrorDetail;
}

const CardCompanyContainer = ({ value, handleSelect, errorInfo }: CardCompanyContainerProps) => {
  return (
    <div>
      <DropdownField title="카드사를 선택해 주세요" subtitle="현재 국내 카드사만 가능합니다.">
        <Dropdown value={value} handleSelect={handleSelect} />
      </DropdownField>
      <ErrorWrapper>{errorInfo && <ErrorText>{errorInfo.errorMessage}</ErrorText>}</ErrorWrapper>
    </div>
  );
};

export default CardCompanyContainer;
