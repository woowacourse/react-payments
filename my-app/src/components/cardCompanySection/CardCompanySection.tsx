import { useId } from 'react';
import { CARD_COMPANIES, type CardCompany } from './CardCompanyConstants';
import { useCardCompany } from './useCardCompany';
import CommonSection from '../common/commonSection/CommonSection';
import ChevronDown from '../../assets/ChevronDownIcon.svg';
import ChevronUp from '../../assets/ChevronUpIcon.svg';
import { DropdownButton, DropdownContainer, DropdownItem, DropdownList } from './CardCompanySection.styles';

interface Props {
  value: CardCompany | '';
  setValue: (value: CardCompany) => void;
}

const CardCompanySection = ({ value, setValue }: Props) => {
  const cardCompanySelectId = useId();
  const dropdownListId = useId();
  const { isOpen, toggleDropdown, handleChooseCompany, handleKeyDown } = useCardCompany({ setValue });

  return (
    <CommonSection
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다."
      label=""
      errorMessage=""
      htmlFor={cardCompanySelectId}
    >
      <DropdownContainer>
        <DropdownButton id={cardCompanySelectId} onClick={toggleDropdown} type="button" aria-haspopup="listbox" aria-expanded={isOpen} aria-controls={isOpen ? dropdownListId : undefined}>
          <span style={{ color: value ? '#000000' : '#ACACAC' }}>
            {value || '카드사를 선택해주세요'}
          </span>
          <span>
            {isOpen ? (
              <img src={ChevronDown} alt="열린 상태" />
            ) : (
              <img src={ChevronUp} alt="닫힌 상태" />
            )}
          </span>
        </DropdownButton>

        {/* isOpen이 true일 떄만 list 렌더링 */}
        {isOpen && (
          <DropdownList id={dropdownListId} role="listbox">
            {CARD_COMPANIES.map((company) => (
              <DropdownItem key={company} role="option" tabIndex={0} aria-selected={value === company} onClick={() => handleChooseCompany(company)} onKeyDown={(e) => handleKeyDown(e, company)}>
                {company}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </CommonSection>
  );
};

export default CardCompanySection;
