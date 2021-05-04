import { useCallback, useEffect, useState } from 'react';
import requestEntity from '../api/requestEntity';
import { FETCH_METHOD } from '../constants/api';

const initialHeader = {
  'Content-Type': 'application/json; charset=UTF-8',
};

export default (entity) => {
  const [value, setValue] = useState();

  const getEntity = useCallback(
    async (header = initialHeader) => {
      const entities = await requestEntity(FETCH_METHOD.GET, `/${entity}`, {
        ...initialHeader,
        ...header,
      });

      if (!entities) return;

      setValue(entities.reverse());
    },
    [entity]
  );

  const updateEntity = async (target, header = initialHeader) => {
    const newEntity = await requestEntity(
      FETCH_METHOD.PATCH,
      `/${entity}/${target.id}`,
      Object.assign(initialHeader, { ...initialHeader, ...header }),
      target
    );

    if (!newEntity) return;

    const newValue = value.filter((v) => v.id !== newEntity.id);
    setValue([...newValue, newEntity]);
  };

  const addEntity = async (target, header = initialHeader) => {
    const newEntity = await requestEntity(
      FETCH_METHOD.POST,
      `/${entity}`,
      Object.assign(initialHeader, { ...initialHeader, ...header }),
      target
    );

    if (!newEntity) return;

    setValue([...value, newEntity]);
  };

  const deleteEntity = async (targetId, header = initialHeader) => {
    const result = await requestEntity(
      FETCH_METHOD.DELETE,
      `/${entity}/${targetId}`,
      Object.assign(initialHeader, { ...initialHeader, ...header })
    );

    if (!result) return;

    const newValue = value.filter((v) => v.id !== targetId);
    setValue(newValue);
  };

  useEffect(() => {
    getEntity();
  }, [getEntity]);

  useEffect(() => () => setValue([]), []);

  return { value, setValue, getEntity, updateEntity, addEntity, deleteEntity };
};
