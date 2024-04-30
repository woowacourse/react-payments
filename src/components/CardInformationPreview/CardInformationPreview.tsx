import { CardNumberStateType } from '../../hooks/useCardNumber';
import { ExpirationDateStateType } from '../../hooks/useExpirationDate';
import { UserNameStateType } from '../../hooks/useUserName';
import { SelectedCardStateType } from '../../hooks/useSelectedCardState';
import { CVCStateType } from '../../hooks/useCVC';
import BackOfTheCard from '../BackOfTheCard/BackOfTheCard';
import FrontOfTheCard from '../FrontOfTheCard/FrontOfTheCard';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberStateType;
  expirationDateState: ExpirationDateStateType;
  userNameState: UserNameStateType;
  selectedCardState: SelectedCardStateType;
  cvcState: CVCStateType;
}

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  selectedCardState,
  cvcState,
}: CardInformationPreviewProps) => {
  const isBackOfTheCardAppearedCondition = cvcState.isFocus;

  return (
    <>
      {isBackOfTheCardAppearedCondition && <BackOfTheCard cvcState={cvcState} />}
      {!isBackOfTheCardAppearedCondition && (
        <FrontOfTheCard
          cardNumberState={cardNumberState}
          expirationDateState={expirationDateState}
          userNameState={userNameState}
          selectedCardState={selectedCardState}
          cvcState={cvcState}
        />
      )}
    </>
  );
};

export default CardInformationPreview;
