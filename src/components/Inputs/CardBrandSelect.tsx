import * as S from './common.style';
import { CARD_COMPANY } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Select from '../composables/Select';

interface Props {
  cardCompany: UseInputReturn<HTMLSelectElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardBrandSelect({ cardCompany, setNextContentDisplay }: Props) {
  return (
    <S.Wrapper>
      <InputSection title={CARD_COMPANY.title} description={CARD_COMPANY.description}>
        <Select
          ref={cardCompany.ref}
          options={[...CARD_COMPANY.options]}
          value={cardCompany.value}
          placeholder={CARD_COMPANY.placeholder}
          isError={cardCompany.isError}
          onChange={(e) => {
            cardCompany.onChangeHandler(e);
            if (e.target.value !== '') {
              setNextContentDisplay(true);
            }
          }}
          onBlur={cardCompany.onBlurHandler}
        />
      </InputSection>
      <S.ErrorWrapper>
        <S.ErrorMessage>{cardCompany.isError && cardCompany.errorMessage}</S.ErrorMessage>
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
