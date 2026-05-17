export interface IPaymentsError {
  code: string;
  message: string;
}

class PaymentsError extends Error {
  code: string;

  constructor({ code, message }: IPaymentsError) {
    super(message);
    this.code = code;
  }
}

export default PaymentsError;
