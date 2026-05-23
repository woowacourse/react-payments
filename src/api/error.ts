export class HTTPError<TCode extends string> extends Error {
  status: number;
  code: TCode;

  constructor(status: number, code: TCode, message: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export class NetworkError extends Error {
  constructor(message = '네트워크 오류가 발생했습니다.') {
    super(message);
  }
}
