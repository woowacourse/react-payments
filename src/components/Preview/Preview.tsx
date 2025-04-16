import { useCard } from "../../hooks/useCard";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  PreviewContainerCSS,
  PreviewCSS,
} from "./Preview.styled";

function Preview() {
  const { cardNumbers, expirationPeriod } = useCard();
  return (
    <PreviewContainerCSS>
      <PreviewCSS>
        <CardTypeCSS />
        <CardNumbersGroupCSS>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>{cardNumbers.third}</span>
          <span>{cardNumbers.fourth}</span>
        </CardNumbersGroupCSS>
        <span>
          {expirationPeriod.month}/{expirationPeriod.year}
        </span>
      </PreviewCSS>
    </PreviewContainerCSS>
  );
}
export default Preview;
