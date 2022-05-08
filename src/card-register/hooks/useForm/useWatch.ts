import React, { useEffect, useState } from 'react';
import { UseWatchOption } from './types';
import { useFormContext } from './useFormContext';

function useWatch<T>(name: string, option?: UseWatchOption<T>) {
  const { _fieldValueSubject } = useFormContext();
  const [value, setValue] = useState<T | string>(option?.defaultValue ?? '');

  const callback = React.useCallback((newValue: T) => {
    setValue(newValue);
  }, []);

  useEffect(() => {
    if (_fieldValueSubject.current) {
      const observer = { notify: callback };
      return _fieldValueSubject.current.subscribe(name, observer).unsubscribe;
    }
    return undefined;
  }, [_fieldValueSubject, name, callback]);

  return value;
}

export default useWatch;
