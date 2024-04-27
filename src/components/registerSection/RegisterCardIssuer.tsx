import * as S from '../../app.style';
import * as Styled from './registerCardIssuer.style';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { CARD_ISSUER } from '@/constants/cardSection';
import { forwardRef, SelectHTMLAttributes } from 'react';
import INITIAL_CARD_ISSUER_INFO from '@/constants/allCardIssuerInfo';

interface RegisterCardIssuerProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const RegisterCardIssuer = forwardRef<HTMLSelectElement, RegisterCardIssuerProps>((props, ref) => {
  const { onChange } = props;

  return (
    <S.Wrapper>
      <InputSection title={CARD_ISSUER.title} inputTitle="" description={CARD_ISSUER.inputTitle}>
        <Label htmlFor={'cardIssuer'} />
        <Styled.Select ref={ref} onChange={onChange} id={'cardIssuer'}>
          {INITIAL_CARD_ISSUER_INFO.map((cardIssuer) => {
            return (
              <option key={cardIssuer.id} value={cardIssuer.value}>
                {cardIssuer.issuer}
              </option>
            );
          })}
        </Styled.Select>
      </InputSection>
    </S.Wrapper>
  );
});

export default RegisterCardIssuer;
