import Label from '../Label';
import { Input, InputBox } from '../Input';
import styled from 'styled-components';

const CardOwnerInput = () => {
  return (
    <p>
      <Styled.LabelWrapper>
        <Label htmlFor="owner">카드 소유자 이름 (선택)</Label>
        <Label>0/30</Label>
      </Styled.LabelWrapper>
      <Styled.Box marginTop="10px">
        <Input
          id="owner"
          type="text"
          width="100%"
          maxLength={30}
          placeholder="이름을 입력해주세요."
          textAlign="center"
        />
      </Styled.Box>
    </p>
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
