import { StyledInput } from 'components/Input';
import { StyledInputBox } from 'components/InputBox';
import { LENGTH, REGEX } from 'constants/constants';
import { AddCardContext } from 'context/CardContext';
import { useInputHandler } from 'hooks/useInputHandler';
import { useContext } from 'react';
import styled from 'styled-components';

const NameInput = () => {
  const { name, setName } = useContext(AddCardContext);

  const NameValidatior = (target: string, value: string) => {
    const upperValue = value.toUpperCase().trimStart();
    return upperValue.includes('  ') ? '' : upperValue;
  };

  const { handleInput: handleName } = useInputHandler(setName, {
    length: LENGTH.NAME,
    regex: REGEX.ONLY_ENGLISH,
    validator: NameValidatior,
  });

  return (
    <>
      <Wrapper>
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
        <p>
          {name.name.length}/{LENGTH.NAME}
        </p>
      </Wrapper>
      <NameInputBox>
        <StyledNameInput
          type="text"
          name="name"
          id="name"
          maxLength={LENGTH.NAME}
          value={name.name}
          onChange={handleName}
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ></StyledNameInput>
      </NameInputBox>
    </>
  );
};

export const StyledNameInput = styled(StyledInput)`
  width: 88vw;
`;

export const NameInputBox = styled(StyledInputBox)`
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    color: var(--label-color);
    font-size: 12px;
  }
`;

export default NameInput;
