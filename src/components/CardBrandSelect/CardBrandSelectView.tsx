import InputAreaHeader from '../common/InputAreaHeader';
import InputSelect from '../common/InputSelect';
import { Container, ErrorMessage } from '../../styles/common';

interface CardBrandSelectViewProps {
  cardBrandInfo: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CardBrandSelectView = ({
  cardBrandInfo,
  handleSelectChange,
}: CardBrandSelectViewProps) => {
  return (
    <Container data-testid="cardbrand-component">
      <InputAreaHeader
        title="카드사를 선택해 주세요"
        caption="현재 국내 카드사만 가능합니다."
      />
      <InputSelect value={cardBrandInfo} onChange={handleSelectChange} />
      <ErrorMessage></ErrorMessage>
    </Container>
  );
};

export default CardBrandSelectView;
