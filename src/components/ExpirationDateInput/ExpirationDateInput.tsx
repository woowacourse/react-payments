import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import Label from '../Label';

const ExpirationDateInput = () => {
  return (
    <p>
      <Label htmlFor="expiration-date">만료일</Label>
      <Styled.Box marginTop="10px">
        <Input
          id="expiration-date"
          type="text"
          width="65px"
          maxLength={2}
          placeholder="MM"
          textAlign="right"
          inputMode="numeric"
        />
        <Slash />
        <Input type="text" width="65px" maxLength={2} placeholder="YY" textAlign="left" inputMode="numeric" />
      </Styled.Box>
    </p>
  );
};

export default ExpirationDateInput;

const Box = styled(InputBox)`
  width: 140px;
`;

const SlashWrapper = styled.div`
  width: 13px;
  color: #737373;
  font-size: 18px;
  text-align: center;
`;

const Styled = {
  Box,
  SlashWrapper,
};

const Slash = () => {
  return <SlashWrapper>/</SlashWrapper>;
};
