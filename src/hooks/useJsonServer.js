import { useCallback, useEffect, useState } from 'react';
import requestEntity from '../api/requestCard';
import { FETCH_METHOD } from '../constants/api';

export default (entity) => {
  const [value, setValue] = useState();

  const getEntity = useCallback(async () => {
    const entities = await requestEntity(FETCH_METHOD.GET, `/${entity}`);
    setValue(entities.reverse());
  }, [entity]);

  const updateEntity = async (target) => {
    const newEntity = await requestEntity(FETCH_METHOD.PATCH, `/${entity}/${target.id}`, target);
    const newValue = value.filter((v) => v.id !== newEntity.id);
    setValue([...newValue, newEntity]);
  };

  const addEntity = async (target) => {
    const newEntity = await requestEntity(FETCH_METHOD.POST, `/${entity}`, target);
    setValue([...value, newEntity]);
  };

  const deleteEntity = async (targetId) => {
    await requestEntity(FETCH_METHOD.DELETE, `/${entity}/${targetId}`);
    const newValue = value.filter((v) => v.id !== targetId);
    setValue(newValue);
  };

  useEffect(() => {
    getEntity();
  }, [getEntity]);

  useEffect(() => () => setValue([]), []);

  return { value, setValue, getEntity, updateEntity, addEntity, deleteEntity };
};
