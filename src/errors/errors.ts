export class HttpError extends Error {
  name = 'HttpError';
  code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
}

export class NetworkError extends Error {
  name = 'NetworkError';

  constructor(message: string) {
    super(message);
  }
}
