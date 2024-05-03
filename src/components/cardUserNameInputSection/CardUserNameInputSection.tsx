import { CARD_FORM_INPUTS } from '../../constants/setting';
import { Input } from '../common/input/Input.styled';
import NewCardInputSection from '../newCardInputSection/NewCardInputSection';

interface CardUserNameInputSectionProps {
  cardInfo: { userName: string };
  errorMessage: { userName: string[] };
  handleCardUserName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardUserNameInputSection: React.FC<CardUserNameInputSectionProps> = ({
  cardInfo,
  errorMessage,
  handleCardUserName,
}) => {
  return (
    <NewCardInputSection
      label={CARD_FORM_INPUTS.USER_NAME.LABEL}
      mainText={CARD_FORM_INPUTS.USER_NAME.MAIN_TEXT}
      subText={CARD_FORM_INPUTS.USER_NAME.SUB_TEXT}
      errorMessage={errorMessage.userName}
    >
      <Input
        value={cardInfo.userName}
        autoFocus
        maxLength={CARD_FORM_INPUTS.USER_NAME.MAX_LENGTH}
        placeholder={CARD_FORM_INPUTS.USER_NAME.PLACEHOLDER}
        $isError={!!errorMessage.userName[0]}
        onChange={(event) => handleCardUserName(event)}
      ></Input>
    </NewCardInputSection>
  );
};

export default CardUserNameInputSection;
