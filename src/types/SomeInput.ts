import {
  CARD_NUMBER_INPUT_NAMES,
  EXPIRED_DATE_INPUT_NAMES,
  PASSWORD_INPUT_NAMES,
} from 'constant/inputNames';

type SomeInput<T extends string, S> = {
  [K in T]: S;
};

type NumberInput<S> = SomeInput<typeof CARD_NUMBER_INPUT_NAMES[number], S>;
type ExpiredInput<S> = SomeInput<typeof EXPIRED_DATE_INPUT_NAMES[number], S>;
type PasswordsInput<S> = SomeInput<typeof PASSWORD_INPUT_NAMES[number], S>;

export { SomeInput, NumberInput, ExpiredInput, PasswordsInput };
