import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  PreviewContainerCSS,
  PreviewCSS,
} from "./Preview.styled";

export interface PreviewProps {
  cardNumbers: string[];
  expirationPeriod: string[];
}

function Preview({ cardNumbers, expirationPeriod }: PreviewProps) {
  return (
    <PreviewContainerCSS>
      <PreviewCSS>
        <CardTypeCSS />
        <CardNumbersGroupCSS>
          {cardNumbers.map((cardNumber) => (
            <span>{cardNumber}</span>
          ))}
        </CardNumbersGroupCSS>
        <div>
          <span>{expirationPeriod.join("/")}</span>
        </div>
      </PreviewCSS>
    </PreviewContainerCSS>
  );
}
export default Preview;
