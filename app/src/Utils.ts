export function runValidators(validators: (() => void)[]): {
  state: boolean;
  message: string;
} {
  try {
    validators.forEach((v: () => void) => v());
    return { state: true, message: "" };
  } catch (err) {
    return { state: false, message: err.message };
  }
}
