import styled from "styled-components";
import PreviewImg from "/card-preview.jpg";
import LogoImg from "/visa.jpg";

export interface PreviewProps {
  cardNumbers: string[];
  expirationPeriod: string[];
}

const PreviewCSS = styled.div`
  background: no-repeat center url(${PreviewImg});
  background-size: cover;
  width: 230px;
  height: 180px;

  color: #ffffff;
  font-size: 20px;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  gap: 10px;
  position: relative;
`;

const CardNumbersGroupCSS = styled.div`
  display: flex;
  gap: 7px;
`;

const CardTypeCSS = styled.div`
  background: no-repeat url(${LogoImg});
  background-size: cover;
  width: 44px;
  height: 30px;
  border-radius: 4px;
  position: absolute;
  right: 25px;
  top: 10px;
`;

function Preview({ cardNumbers, expirationPeriod }: PreviewProps) {
  return (
    <PreviewCSS>
      <CardTypeCSS></CardTypeCSS>
      <CardNumbersGroupCSS>
        {cardNumbers.map((cardNumber) => (
          <span>{cardNumber}</span>
        ))}
      </CardNumbersGroupCSS>
      <div>
        <span>{expirationPeriod.join("/")}</span>
      </div>
    </PreviewCSS>
  );
}
export default Preview;
