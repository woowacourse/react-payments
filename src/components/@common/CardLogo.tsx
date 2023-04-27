import * as Styled from './CardLogo.styles';

interface CardLogoProps {
  companyImage: string;
  companyName: string;
}

const CardLogo = ({ companyImage, companyName }: CardLogoProps) => {
  return (
    <Styled.Wrapper>
      <img src={companyImage} alt="로고" />
      <Styled.Text>{companyName}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default CardLogo;
