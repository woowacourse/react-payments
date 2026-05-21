export class HTTPError<TCode extends string> extends Error {
  code: TCode;

  constructor(code: TCode, message: string) {
    super(message);
    this.code = code;
  }
}

export class NetworkError extends Error {
  constructor(message = '네트워크 오류가 발생했습니다.') {
    super(message);
  }
}
