import styled from 'styled-components';
import type {CardInfoType} from '../../../../common/types/CardInfoType';
import CardPreviewContainer from './CardPreviewContainer/CardPreviewContainer';

const CardPreviewSection = ({cardInfo}: {cardInfo: CardInfoType}) => {
  return (
    <Container>
      <CardPreviewContainer cardInfo={cardInfo} />
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
