import * as S from '../../app.style';
import Option from '../composables/Option';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { CARD_ISSUER } from '../../constants/cardSection';
import { forwardRef } from 'react';
import INITIAL_CARD_ISSUER_INFO from '../../constants/initialCardIssuerInfo';
import Select from '../composables/Select';

type RegisterCardIssuerProps = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const RegisterCardIssuer = forwardRef<HTMLSelectElement, RegisterCardIssuerProps>((props, ref) => {
  const { onChange } = props;

  return (
    <S.Wrapper>
      <InputSection title={CARD_ISSUER.title} inputTitle="" description={CARD_ISSUER.inputTitle}>
        <Label htmlFor={'cardIssuer'} />
        <Select ref={ref} onChange={onChange} id={'cardIssuer'}>
          {INITIAL_CARD_ISSUER_INFO.map((cardIssuer) => {
            return <Option key={cardIssuer.id} text={cardIssuer.issuer} value={cardIssuer.value} />;
          })}
        </Select>
      </InputSection>
    </S.Wrapper>
  );
});

export default RegisterCardIssuer;
