import { nativeValidityMessage } from './constants';
import { NativeValidityErrorType, ValidityMessage } from './types';

export const isObjectType = (value: unknown): boolean => typeof value === 'object';
export const isNullOrUndefined = (value: unknown): value is null | undefined => value == null;
export const isObject = <T extends object>(value: unknown): value is T =>
  !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value);
export const isString = (value: unknown): value is string => typeof value === 'string';
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export default function cloneObject(data: any) {
  let copy: any;
  const isArray = Array.isArray(data);

  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (isArray || isObject(data)) {
    copy = isArray ? [] : {};
    (Object.keys(data) as (keyof typeof data)[]).forEach(key => {
      copy[key] = isFunction(data[key]) ? data[key] : cloneObject(data[key]);
    });
  } else {
    return data;
  }

  return copy;
}
export const getValidityMessage = (validity: ValidityState, customValidityMessage: ValidityMessage): string | null => {
  const keys = Object.keys(nativeValidityMessage) as NativeValidityErrorType[];
  let message = null;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    message = validity[key] ? customValidityMessage[key] || nativeValidityMessage[key] : null;
    if (message) break;
  }
  return message;
};
