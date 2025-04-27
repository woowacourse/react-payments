import { ChangeEvent } from 'react';
import InputAreaHeader from '../common/InputAreaHeader';
import InputSelect from '../common/InputSelect';
import { Container, ErrorMessage } from '../common/Styled';

interface BrandSelectViewProps {
  brand: string;
  handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const BrandSelectView = ({
  brand,
  handleSelectChange,
}: BrandSelectViewProps) => {
  return (
    <Container data-testid="brand-component">
      <InputAreaHeader
        title="카드사를 선택해 주세요"
        caption="현재 국내 카드사만 가능합니다."
      />
      <InputSelect value={brand} onChange={handleSelectChange} />
      <ErrorMessage></ErrorMessage>
    </Container>
  );
};

export default BrandSelectView;
