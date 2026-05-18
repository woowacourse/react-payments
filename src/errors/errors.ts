export class HttpError extends Error {
  name = 'HttpError';

  constructor(message: string) {
    super(message);
  }
}

export class NetworkError extends Error {
  name = 'NetworkError';

  constructor(message: string) {
    super(message);
  }
}
