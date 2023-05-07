import { StyledCaption } from 'components/Caption';
import { StyledInput } from 'components/Input';
import InputBox from 'components/InputBox';
import { LENGTH, REGEX } from 'constants/constants';
import { AddCardContext } from 'context/CardContext';
import { ChangeEvent, useContext } from 'react';
import styled from 'styled-components';
import { showNameCaption } from 'utils/captionStyles';
import { changeToValidValue } from 'utils/inputValidator';

const NameInput = () => {
  const { name, setName } = useContext(AddCardContext);

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toUpperCase().trimStart().split('  ').join(' ');

    const vaildValue = changeToValidValue(value, {
      length: LENGTH.NAME,
      regex: REGEX.ONLY_ENGLISH,
    });

    setName?.(vaildValue);
  };

  return (
    <>
      <Wrapper>
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
        <p>
          {name.length}/{LENGTH.NAME}
        </p>
      </Wrapper>
      <InputBox>
        <StyledNameInput
          type="text"
          name="name"
          id="name"
          maxLength={LENGTH.NAME}
          value={name}
          onChange={handleName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        />
      </InputBox>
      <NameInputCaption name={name}>
        카드 이름은 영문만 입력 가능합니다.
      </NameInputCaption>
    </>
  );
};

export const StyledNameInput = styled(StyledInput)`
  width: 80%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    color: var(--label-color);
    font-size: 12px;
  }
`;

const NameInputCaption = styled(StyledCaption)<{ name: string }>`
  visibility: ${({ name }) => showNameCaption(name)};
`;

export default NameInput;
