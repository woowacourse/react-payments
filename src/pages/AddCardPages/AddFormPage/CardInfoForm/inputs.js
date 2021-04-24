import { Input, Label, Text } from '../../../../components';

export const CardNumberInput = ({
  firstFourDigits,
  secondFourDigits,
  thirdFourDigits,
  fourthFourDigits,
}) => {
  const dash = (
    <Text fontSize="0.75rem" textAlign="start" width="1rem">
      -
    </Text>
  );

  return (
    <>
      <Label>카드 번호</Label>
      {[firstFourDigits, secondFourDigits]
        .map((fourDigit, index) => (
          <Input
            key={index}
            className="CardNumberInput__Field"
            container="CardInfoForm__Input__Filler--filled CardNumberInput__Filler"
            type="number"
            value={fourDigit}
          />
        ))
        .concat(
          [thirdFourDigits, fourthFourDigits].map((fourDigit, index) => (
            <Input
              key={index}
              className="CardNumberInput__Field"
              container="CardInfoForm__Input__Filler--transparent CardNumberInput__Filler"
              type="password"
              value={fourDigit}
            />
          )),
        )
        .join(dash)}
    </>
  );
};

export const ExpirationDateInput = ({ month, year }) => {
  const slash = (
    <Text fontSize="0.75rem" textAlign="start" width="1rem">
      /
    </Text>
  );

  return [month, year]
    .map((value, index) => (
      <Input
        key={index}
        className="ExpirationDateInput__Field"
        container="CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler"
        placeholder="MM"
        type="number"
        value={value}
      />
    ))
    .join(slash);
};

export const UserNameInput = ({ value }) => {
  return (
    <Input
      className="CardOwnerInput__Field"
      container="CardInfoForm__Input__Filler--filled CardOwnerInput__Filler"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      value={value}
    />
  );
};

export const SecurityCodeInput = ({ value }) => {
  return (
    <Input
      className="SecurityCodeInput__Field"
      container="CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler"
      type="password"
      value={value}
    />
  );
};

export const PasswordInput = ({ value }) => {
  return (
    <div className="CardPasswordInput">
      {['filled', 'filled', 'transparent', 'transparent'].map((style, index) => (
        <Input
          key={index}
          container={`CardInfoForm__Input__Filler--${style} CardPasswordInput__Filler`}
          className="CardPasswordInput__Field"
          type="password"
          value={value}
        />
      ))}
    </div>
  );
};
