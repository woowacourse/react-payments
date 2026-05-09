import CvcField from './CvcField/CvCField';
import ExpiryField from './ExpiryField/ExpiryField';
import BrandSelectField from './BrandSelectField/BrandSelectField';
import InputContainer from './InputContainer/InputContainer';
import NumberField from './NumberField/NumberField';
import type {useCardNumbers} from '../../hooks/useCardNumbers';
import type {useExpiryDate} from '../../hooks/useExpiryDate';
import type {useCvcNumber} from '../../hooks/useCvcNumber';
import type {CardCompanyType} from '../../domain/cardCompany';
import styled from 'styled-components';

type Props = {
  numberField: ReturnType<typeof useCardNumbers>;
  expiryField: ReturnType<typeof useExpiryDate>;
  cvcField: ReturnType<typeof useCvcNumber>;
  selectedCompany: CardCompanyType | null;
  onCompanyChange: (value: CardCompanyType | null) => void;
  showCompanySelect: boolean;
  showExpiry: boolean;
  showCvc: boolean;
};

const InfoInputSection = ({
  numberField,
  expiryField,
  cvcField,
  selectedCompany,
  onCompanyChange,
  showCompanySelect,
  showExpiry,
  showCvc,
}: Props) => {
  const infoInputFields = [
    {
      id: 'cvc',
      show: showCvc,
      title: 'CVC 번호를 입력해 주세요',
      label: 'CVC',
      node: <CvcField {...cvcField} />,
    },
    {
      id: 'expiry',
      show: showExpiry,
      title: '카드 유효기간을 입력해 주세요',
      description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
      label: '유효기간',
      node: <ExpiryField {...expiryField} />,
    },
    {
      id: 'company',
      show: showCompanySelect,
      title: '카드사를 선택해 주세요',
      description: '현재 국내 카드사만 가능합니다.',
      node: <BrandSelectField selectedCompany={selectedCompany} onChange={onCompanyChange} />,
    },
    {
      id: 'number',
      show: true,
      title: '결제할 카드 번호를 입력해 주세요',
      description: '본인 명의의 카드만 결제 가능합니다.',
      label: '카드 번호',
      node: (
        <NumberField
          cardNumbers={numberField.cardNumbers}
          format={numberField.format}
          firstErrorIdx={numberField.firstErrorIdx}
          errorMsg={numberField.errorMsg}
          onChange={numberField.handleChange}
          onBlur={numberField.handleBlur}
        />
      ),
    },
  ];

  return (
    <Container>
      {infoInputFields
        .filter((field) => field.show)
        .map((field) => (
          <InputContainer key={field.id} title={field.title} description={field.description} label={field.label}>
            {field.node}
          </InputContainer>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
