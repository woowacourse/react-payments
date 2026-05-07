import styled from 'styled-components';
import type { CardPreviewInfoType } from '../../../../common/types/CardPreviewInfoType';
import CardPreviewContainer from './CardPreviewContainer';

const CardPreviewSection = ({
  cardPreviewInfo,
}: {
  cardPreviewInfo: CardPreviewInfoType;
}) => {
  return (
    <Container>
      <CardPreviewContainer cardPreviewInfo={cardPreviewInfo} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 25px 0;
`;

export default CardPreviewSection;
