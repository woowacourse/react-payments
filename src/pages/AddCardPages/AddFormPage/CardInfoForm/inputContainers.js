import { Container, Input, Label, Text } from '../../../../components';

export const CardNumberInputContainer = () => {
  return (
    <Container>
      <Label>카드 번호</Label>
      <Container>
        <Input type="number" value="1111" width="4.8rem" />
        <Text fontSize="0.75rem" textAlign="start" width="1rem">
          -
        </Text>
        <Input type="number" value="1111" width="4.8rem" />
        <Text fontSize="0.75rem" textAlign="start" width="1rem">
          -
        </Text>
        <Input type="password" value="1111" width="4.8rem" />
        <Text fontSize="0.75rem" textAlign="start" width="1rem">
          -
        </Text>
        <Input type="password" value="1111" width="4.8rem" />
      </Container>
    </Container>
  );
};

export const ExpirationDateInputContainer = () => {
  return (
    <Container width="43%">
      <Input placeholder="MM" type="number" value="04" width="2.4rem" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        /
      </Text>
      <Input placeholder="YY" type="number" value="04" width="2.4rem" />
    </Container>
  );
};

export const UserNameInputContainer = () => {
  return (
    <Container>
      <Input placeholder="카드에 표시된 이름과 동일하게 입력하세요." value="SUN" width="18rem" />
    </Container>
  );
};

export const SecurityCodeInputContainer = () => {
  return (
    <Container width="26%">
      <Input type="password" value="123" width="3.6rem" />
    </Container>
  );
};

export const PasswordInputContainer = () => {
  return (
    <Container>
      <Container width="2.8125rem">
        <Input textAlign="center" type="password" value="3" />
      </Container>
      <Container width="2.8125rem">
        <Input textAlign="center" type="password" value="3" />
      </Container>
      <Container width="2.8125rem">
        <Input disabled textAlign="center" type="password" value="3" />
      </Container>
      <Container width="2.8125rem">
        <Input disabled textAlign="center" type="password" value="3" />
      </Container>
    </Container>
  );
};
