interface ApiErrorParams {
  status: number;
  code?: string;
  message: string;
}

class ApiError extends Error {
  readonly status: number;
  readonly code?: string;

  constructor({ status, code, message }: ApiErrorParams) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
}

export default ApiError;
