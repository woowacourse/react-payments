import { FieldName } from './field-type';

export type Observer = {
  notify: (value: any) => void;
};

export type Subscription = {
  unsubscribe: () => void;
};

export type Subject = {
  notify: (name: FieldName, value: any) => void;
  subscribe: (name: FieldName, observer: Observer) => Subscription;
};

export type UseWatchOption<T> = {
  defaultValue?: T;
};
