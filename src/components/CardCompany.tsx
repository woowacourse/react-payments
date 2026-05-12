import type {
  CardCompany as CardCompanyType,
  CardCompanyHandler,
  CardCompanyStatus,
} from '../types/cardStausTypes';

type CardCompanyProps = {
  cardCompanyStatus: CardCompanyStatus;
  setCardCompany: CardCompanyHandler;
};

const CARD_COMPANIES: { value: Exclude<CardCompanyType, ''>; label: string }[] = [
  { value: 'bc', label: 'BC카드' },
  { value: 'shinhan', label: '신한카드' },
  { value: 'kakao', label: '카카오뱅크' },
  { value: 'hyundai', label: '현대카드' },
  { value: 'woori', label: '우리카드' },
  { value: 'lotte', label: '롯데카드' },
  { value: 'hana', label: '하나카드' },
  { value: 'kookmin', label: '국민카드' },
];

export default function CardCompany({ cardCompanyStatus, setCardCompany }: CardCompanyProps) {
  return (
    <div css={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1
          css={(theme) => ({
            ...theme.typography.title,
            color: theme.colors.black,
          })}
        >
          카드사를 선택해 주세요
        </h1>
        <p
          css={(theme) => ({
            ...theme.typography.caption,
            color: theme.colors.description,
          })}
        >
          현재 국내 카드사만 가능합니다.
        </p>
      </div>
      <div>
        <select
          value={cardCompanyStatus.cardCompany}
          onChange={setCardCompany.handleCardCompany}
          css={(theme) => ({
            width: '315px',
            height: '36px',
            borderRadius: '4px',
            border: `1px solid ${theme.colors.inactiveBorder}`,
            padding: '0 10px',
            color:
              cardCompanyStatus.cardCompany === '' ? theme.colors.description : theme.colors.black,
            backgroundColor: theme.colors.white,
          })}
        >
          <option value="" disabled>
            카드사를 선택해주세요
          </option>
          {CARD_COMPANIES.map((company) => (
            <option key={company.value} value={company.value}>
              {company.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
