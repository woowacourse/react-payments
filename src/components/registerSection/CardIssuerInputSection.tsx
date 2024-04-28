import * as S from '../../app.style';
import * as Styled from './registerCardIssuer.style';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { CARD_ISSUER } from '@/constants/cardSection';
import { SelectHTMLAttributes, useCallback } from 'react';
import INITIAL_CARD_ISSUER_INFO from '@/constants/allCardIssuerInfo';

interface RegisterCardIssuerProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const CardIssuerInputSection = ({ onChange }: RegisterCardIssuerProps) => {
  const nameRef = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <S.Wrapper>
      <InputSection title={CARD_ISSUER.title} inputTitle="" description={CARD_ISSUER.inputTitle}>
        <Label htmlFor={'cardIssuer'} />
        <Styled.Select ref={nameRef} onChange={onChange} id={'cardIssuer'}>
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
};
export default CardIssuerInputSection;
