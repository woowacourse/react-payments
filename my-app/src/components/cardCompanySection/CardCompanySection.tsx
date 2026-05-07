import { useId } from 'react';
import { CARD_COMPANIES, type CardCompany } from './CardCompanyConstants';
import { useCardCompany } from './useCardCompany';
import CommonSection from '../common/commonSection/CommonSection';
import ChevronDown from '../../assets/ChevronDownIcon.svg';
import ChevronUp from '../../assets/ChevronUpIcon.svg';

interface Props {
  value: CardCompany | '';
  setValue: (value: CardCompany) => void;
}

const CardCompanySection = ({ value, setValue }: Props) => {
  const cardCompanySelectId = useId();
  const { isOpen, toggleDropdown, handleChooseCompany } = useCardCompany({
    value,
    setValue,
  });

  return (
    <CommonSection
      title="카드사를 선택해 주세요"
      description="현재 국내 카드사만 가능합니다."
      label=""
      errorMessage=""
      htmlFor={cardCompanySelectId}
    >
      <div>
        <button id={cardCompanySelectId} onClick={toggleDropdown} type="button">
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
        </button>

        {/* isOpen이 true일 떄만 list 렌더링 */}
        {isOpen && (
          <ul>
            {CARD_COMPANIES.map((company) => (
              <li key={company} onClick={() => handleChooseCompany(company)}>
                {company}
              </li>
            ))}
          </ul>
        )}
      </div>
    </CommonSection>
  );
};

export default CardCompanySection;
