import { ErrorText, ErrorWrapper } from '../styles/common';
import { ErrorDetail } from './types/error';
import Dropdown from './common/Dropdown';
import DropdownField from './common/DropdownField';

interface CardCompanyContainerProps {
  cardCompany: string;
  handleChange: (e: React.MouseEvent<HTMLLIElement>) => void;
  errorInfo?: ErrorDetail;
}

const CardCompanyContainer = ({ cardCompany, handleChange, errorInfo }: CardCompanyContainerProps) => {
  return (
    <div>
      <DropdownField title="카드사를 선택해 주세요" subtitle="현재 국내 카드사만 가능합니다.">
        <Dropdown value={cardCompany} handleChange={handleChange} />
      </DropdownField>
      <ErrorWrapper>{errorInfo && <ErrorText>{errorInfo.errorMessage}</ErrorText>}</ErrorWrapper>
    </div>
  );
};

export default CardCompanyContainer;
