export class RequestAjaxError extends Error {
  status: number;
  data?: unknown;
  headers?: unknown;
  config?: unknown;
  constructor(error: { data: unknown; status: number; headers: unknown; config: unknown }) {
    super('RequestAjaxError');

    this.data = error.data;
    this.status = error.status;
    this.headers = error.headers;
    this.config = error.config;
  }
}

export class RequestNetworkError extends Error {
  // status: number; // network error 의 경우 status code 없음
  data?: unknown;
  headers?: unknown;
  config?: unknown;
  constructor(error: { data: unknown; headers: unknown; config: unknown }) {
    super('RequestNetworkError');
    this.data = error.data;
    this.headers = error.headers;
    this.config = error.config;
  }
}
