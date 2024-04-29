import * as S from '../../app.style';
import * as Styled from './registerCardIssuer.style';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { CARD_ISSUER } from '@/constants/cardSection';
import { SelectHTMLAttributes, useCallback } from 'react';
import INITIAL_CARD_ISSUER_INFO from '@/constants/allCardIssuerInfo';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {}

const CardIssuerInputSection = ({ onChange }: Props) => {
  const cardIssuerRef = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <S.Wrapper>
      <InputSection title={CARD_ISSUER.title} inputTitle="" description={CARD_ISSUER.inputTitle}>
        <Label htmlFor={'cardIssuer'} />
        <Styled.Select ref={cardIssuerRef} onChange={onChange} id={'cardIssuer'}>
          <option value={''} disabled selected>
            카드사를 선택해주세요
          </option>
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
