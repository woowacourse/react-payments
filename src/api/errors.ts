import { ApiError } from "../types";

export class ApiResponseError extends Error {
  constructor(public readonly apiError: ApiError) {
    super(apiError.message);
    this.name = 'ApiResponseError';
  }
}
