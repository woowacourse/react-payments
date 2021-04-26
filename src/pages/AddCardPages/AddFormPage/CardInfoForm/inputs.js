import { Container, Input, Label, Text } from '../../../../components';

export const ExpirationDateInput = () => {
  const slash = (
    <Text color="#737373" fontSize="0.75rem" textAlign="start" width="1rem">
      /
    </Text>
  );

  return (
    <>
      <Label>만료일</Label>
      <Container className="CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler">
        <Input className="ExpirationDateInput__Field" placeholder="MM" type="number" />
        {slash}
        <Input className="ExpirationDateInput__Field" placeholder="YY" type="number" />
      </Container>
    </>
  );
};

export const UserNameInput = () => {
  return (
    <>
      <Label>카드 소유자 이름(선택)</Label>
      <Input
        className="CardOwnerInput__Field"
        container="CardInfoForm__Input__Filler--filled CardOwnerInput__Filler"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </>
  );
};

export const SecurityCodeInput = () => {
  return (
    <>
      <Label>보안 코드(CVC/CVV)</Label>
      <Input
        className="SecurityCodeInput__Field"
        container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
        type="password"
      />
    </>
  );
};

export const PasswordInput = () => {
  return (
    <>
      <Label>카드 비밀번호</Label>
      <div className="CardPasswordInput">
        {['filled', 'filled', 'transparent', 'transparent'].map((style, index) => (
          <Input
            key={index}
            container={`CardInfoForm__Input__Filler--${style} CardPasswordInput__Filler`}
            className="CardPasswordInput__Field"
            type="password"
          />
        ))}
      </div>
    </>
  );
};
