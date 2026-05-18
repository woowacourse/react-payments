import type { ServerErrorCode } from '../feature/CardRegister/hooks/useRegisterServerErrors';

export class HTTPError extends Error {
  code: ServerErrorCode;

  constructor(code: ServerErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export class NetworkError extends Error {
  constructor(message = '네트워크 오류가 발생했습니다.') {
    super(message);
  }
}
