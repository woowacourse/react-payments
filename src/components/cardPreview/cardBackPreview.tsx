import * as Styled from './CardPreview.styled';

export interface CardBackPreviewProps {
  cvc: string;
}

const CardBackPreview = ({ cvc }: CardBackPreviewProps) => {
  return (
    <Styled.CardPreviewContainer cardBackground={'CVC'}>
      <Styled.MagneticSection>
        <Styled.CVCText>{cvc}</Styled.CVCText>
      </Styled.MagneticSection>
    </Styled.CardPreviewContainer>
  );
};

export default CardBackPreview;
