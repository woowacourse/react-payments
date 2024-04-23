class InputError extends Error {
  constructor(arg: string | undefined) {
    super(arg);
  }
}

class BlockedInputError extends InputError {
  constructor(arg: string | undefined) {
    super(arg);
  }
}

class NonBlockedInputError extends InputError {
  constructor(arg: string | undefined) {
    super(arg);
  }
}

export default InputError;
export { BlockedInputError, NonBlockedInputError };
