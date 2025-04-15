import { CardNumbersGroupCSS, CardTypeCSS, PreviewCSS } from "./Preview.styled";

export interface PreviewProps {
  cardNumbers: string[];
  expirationPeriod: string[];
}

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
