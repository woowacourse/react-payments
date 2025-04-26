import styled from '@emotion/styled';
import InputAreaHeader from '../common/InputAreaHeader';
import InputSelect from '../common/InputSelect';

interface CardBrandSelectViewProps {
  cardBrandInfo: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CardBrandSelectView = ({
  cardBrandInfo,
  handleSelectChange,
}: CardBrandSelectViewProps) => {
  return (
    <Container data-testid="cvcnumbers-component">
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.error};
  height: ${({ theme }) => theme.fontSizes.caption};
`;
