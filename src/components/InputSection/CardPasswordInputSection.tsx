import { CardPasswordInputSectionProps } from '@/hooks/useCardPassword';
import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import InputField from '../common/InputField/InputField';
import InputSection from '../common/InputSection/InputSection';
import { useEffect } from 'react';
import useRefFocus from '@/hooks/useRefFocus';

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
  inputRef,
  handleMouseDown,
  goNextStep,
}: CardPasswordInputSectionProps) => {
  const { focusFirst } = useRefFocus([inputRef]);

  useEffect(() => {
    focusFirst();
  }, []);

  const handleCardPasswordInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardPassword(e);
    if (e.target.value.length === 2) {
      goNextStep({ time: 'once', key: 'cardPassword' });
    }
  };

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
          onChange={handleCardPasswordInputChange}
          isError={isError.password}
          placeholder="12"
          onBlur={handleCardPasswordBlur}
          ref={inputRef}
          onMouseDown={handleMouseDown}
        ></InputField>
      </InputSection>
      <ErrorMessage message={errorMessage} />
    </>
  );
};

export default CardPasswordInputSection;
