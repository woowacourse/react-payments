import CardInputSection from '../CardInputSection/CardInputSection';
import CardCVCField from '../../cardInfoFields/CardCVCField/CardCVCField';

interface CardCVCSectionProps {
  cardCVC: string;
  onChangeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
  errorMessage: string;
  show: boolean;
}

function CardCVCSection({
  cardCVC,
  onChangeCardCVC,
  isError,
  errorMessage,
  show,
}: CardCVCSectionProps) {
  return (
    <>
      {show ? (
        <CardInputSection
          title="CVC 번호를 입력해 주세요"
          errorMessage={errorMessage}
        >
          <CardCVCField
            cardCVC={cardCVC}
            isError={isError}
            onChange={onChangeCardCVC}
          />
        </CardInputSection>
      ) : null}
    </>
  );
}

export default CardCVCSection;
