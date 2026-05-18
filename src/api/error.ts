export interface ApiErrorResponse {
  code: string;
  message: string;
}

export class ApiError extends Error {
  code: string;

  constructor({ code, message }: ApiErrorResponse) {
    super(message);
    this.code = code;
  }
}
