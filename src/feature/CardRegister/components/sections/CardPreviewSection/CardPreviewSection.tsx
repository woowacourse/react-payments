import type {ReactNode} from 'react';
import styled from 'styled-components';

type CardPreviewSectionProps = {
  previewSlot: ReactNode;
};

const CardPreviewSection = ({previewSlot}: CardPreviewSectionProps) => {
  return <Container>{previewSlot}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 0 25px 0;
`;

export default CardPreviewSection;
