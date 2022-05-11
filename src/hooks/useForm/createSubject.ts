import { Subject, Observer, Subscription } from './types';

type FieldName = string;

export default function createSubject(): Subject {
  const _subject = new Map<FieldName, Observer[]>();

  const notify = (name: FieldName, value: any) => {
    const observers = _subject.get(name);
    observers && observers.forEach(observer => observer.notify(value));
  };

  const subscribe = (name: FieldName, observer: Observer): Subscription => {
    const observers = _subject.get(name);
    _subject.set(name, observers ? [...observers, observer] : [observer]);
    return {
      unsubscribe: () => {
        const _observers = _subject.get(name);
        const newObservers = _observers ? _observers.filter(o => o !== observer) : [];
        _subject.set(name, newObservers);
      },
    };
  };

  return {
    notify,
    subscribe,
  };
}
