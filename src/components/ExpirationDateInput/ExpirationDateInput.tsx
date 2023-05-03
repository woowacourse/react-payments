import { Input, InputBox } from '../Input';
import styled from 'styled-components';
import { Label } from '../Label';
import useAutoFocus from '../../hooks/useAutoFocus';

type ExpirationDateInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>[];
};

const ExpirationDateInput = ({ onChange }: ExpirationDateInputProps) => {
  const [onMonthChange, onYearChange] = onChange;
  const { inputRefs, focusNext } = useAutoFocus(2);

  return (
    <>
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
          onChange={(e) => {
            onMonthChange(e);
            focusNext(0);
          }}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[0] = node;
          }}
        />
        <Slash />
        <Input
          type="text"
          width="65px"
          maxLength={2}
          placeholder="YY"
          textAlign="left"
          inputMode="numeric"
          onChange={onYearChange}
          autoComplete="off"
          ref={(node: HTMLInputElement) => {
            inputRefs.current[1] = node;
          }}
        />
      </Styled.Box>
    </>
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
