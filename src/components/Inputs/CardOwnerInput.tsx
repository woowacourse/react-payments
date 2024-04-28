import * as S from './common.style';
import { OWNER_NAME } from '../../constants/cardSection';
import { UseInputReturn } from '../../hooks/useInput';
import InputSection from '../InputSection';
import Input from '../composables/Input';
import InputLabel from '../composables/InputLabel';
import { MAX_LENGTH } from '../../constants/rules';
import styled from 'styled-components';

const CompleteButton = styled.button`
  padding: 4px 8px;
  color: #fff;
  background-color: #333333;

  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

interface Props {
  name: UseInputReturn<HTMLInputElement>;
  setNextContentDisplay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardOwnerInput({ name, setNextContentDisplay }: Props) {
  const goNextStep = (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
    if (value !== '' && e.key === 'Enter') {
      setNextContentDisplay(true);
    }
  };

  return (
    <S.Wrapper>
      <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
        <InputLabel htmlFor={'name'} description={'이름 입력'} />
        <Input
          isAutoFocus={true}
          id="name"
          maxLength={MAX_LENGTH.ownerName}
          onChange={name.onChangeHandler}
          onKeyDown={(e) => goNextStep(e, name.value)}
          onBlur={name.onBlurHandler}
          isError={name.isError}
          placeholder="JOHN DOE"
          type="text"
          value={name.value.toUpperCase()}
        />
        {name.value && (
          <CompleteButton onClick={() => setNextContentDisplay(true)}>완료</CompleteButton>
        )}
      </InputSection>
      <S.ErrorWrapper>
        {name.isError && <S.ErrorMessage>{name.errorMessage}</S.ErrorMessage>}
      </S.ErrorWrapper>
    </S.Wrapper>
  );
}
