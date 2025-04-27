import { CardPasswordInputSectionProps } from '@/hooks/useCardPassword';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import InputField from '../common/InputField/InputField';
import InputSection from '../common/InputSection/InputSection';

const CARD_PASSWORD_TEXT = {
  title: '카드 비밀번호를 입력해 주세요',
  description: '앞의 2자리를 입력해주세요',
  subtitle: '비밀번호 앞 2자리',
};

const CardPasswordInputSection = ({
  cardPassword,
  setCardPassword,
  handleCardPasswordBlur,
  isError,
  errorMessage,
}: CardPasswordInputSectionProps) => {
  return (
    <>
      <InputSection
        title={CARD_PASSWORD_TEXT.title}
        description={CARD_PASSWORD_TEXT.description}
        subtitle={CARD_PASSWORD_TEXT.subtitle}
      >
        <InputField
          type="password"
          value={cardPassword}
          name="cardPassword"
          onChange={setCardPassword}
          isError={isError.password}
          placeholder="12"
          onBlur={handleCardPasswordBlur}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardPasswordInputSection;
