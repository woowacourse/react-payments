import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';

type CardOwnerInputProps = {
  owner: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const CardOwnerInput = ({ owner, onChange }: CardOwnerInputProps) => {
  return (
    <>
      <Styled.LabelWrapper>
        <Label htmlFor="owner">카드 소유자 이름 (선택)</Label>
        <Label>{owner.length}/30</Label>
      </Styled.LabelWrapper>
      <Styled.Box marginTop="10px">
        <Input
          id="owner"
          type="text"
          width="100%"
          maxLength={30}
          placeholder="이름을 입력해주세요."
          textAlign="center"
          onChange={onChange}
          autoComplete="off"
          value={owner}
        />
      </Styled.Box>
    </>
  );
};

export default CardOwnerInput;

const Box = styled(InputBox)``;

const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Styled = {
  Box,
  LabelWrapper,
};
