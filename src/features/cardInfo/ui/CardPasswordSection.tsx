import * as S from './CardInfoSection.styles';
import { ErrorProps } from '../../../shared/model/types';
import CustomInput from '../../../shared/ui/CustomInput';

export default function CardPasswordSection({
  error,
  onBlur,
  selectRef,
}: {
  error: ErrorProps;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectRef: React.Ref<HTMLInputElement | null>;
}) {
  const isError =
    error && error['cardPasswordError'].errorIndex !== -1 && error['cardPasswordError'].errorMessage !== '';

  return (
    <S.CardInfoMainSection>
      <div>
        <S.CardInfoTitle>비밀번호를 입력해 주세요</S.CardInfoTitle>
        <S.CardInfoDescription>앞의 2자리를 입력해주세요</S.CardInfoDescription>
      </div>
      <S.CardInfoSubSection>
        <S.CardInfoSubTitle>비밀번호 앞 2자리</S.CardInfoSubTitle>
        <S.CardInfoInputContainer>
          <CustomInput
            type='password'
            name='cardPassword'
            onBlur={onBlur}
            maxLength={2}
            error={isError}
            ref={selectRef}
            onChange={(e) => {
              if (e.target.value.length === 2) {
                if (selectRef && typeof selectRef !== 'function') {
                  selectRef.current?.blur();
                }
              }
            }}
          />
        </S.CardInfoInputContainer>
        <S.CardInfoError>{isError && error['cardPasswordError'].errorMessage}</S.CardInfoError>
      </S.CardInfoSubSection>
    </S.CardInfoMainSection>
  );
}
