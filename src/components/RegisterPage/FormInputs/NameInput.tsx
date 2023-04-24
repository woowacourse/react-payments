import { LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'hooks/useInputHandler';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Card } from 'types/Card';

type Name = Pick<Card, 'name'>;

interface Props {
  name: Name;
  setName: Dispatch<SetStateAction<Name>>;
}

const NameInput = (props: Props) => {
  const { name, setName } = props;

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
      <S.Wrapper>
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
        <p>
          {name.name.length}/{LENGTH.NAME}
        </p>
      </S.Wrapper>
      <S.Input
        type="text"
        name="name"
        id="name"
        maxLength={LENGTH.NAME}
        value={name.name}
        onChange={handleName}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </>
  );
};

export const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    & p {
      color: var(--label-color);
      font-size: 12px;
    }
  `,

  Input: styled.input`
    display: block;
    width: 88vw;
    height: 48px;
    margin: 10px 0 36px;
    padding: 0 8vw;
    font-size: 14px;
    background: var(--input-background);
    border-radius: 8px;
  `,
};

export default NameInput;
