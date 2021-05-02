import { useCallback, useEffect, useState } from 'react';
import requestCardByType from '../api/requestCard';
import { FETCH_METHOD } from '../constants/api';

export default (entity) => {
  const [value, setValue] = useState();

  const getEntity = useCallback(async () => {
    const entities = await requestCardByType(FETCH_METHOD.GET, `/${entity}`);
    setValue(entities.reverse());
  }, [entity]);

  const updateEntity = async (target) => {
    await requestCardByType(FETCH_METHOD.PATCH, `/${entity}/${target.id}`, target);
    getEntity();
  };

  const addEntity = async (target) => {
    await requestCardByType(FETCH_METHOD.POST, `/${entity}`, target);
    getEntity();
  };

  const deleteEntity = async (targetId) => {
    await requestCardByType(FETCH_METHOD.DELETE, `/${entity}/${targetId}`);
    getEntity();
  };

  useEffect(() => {
    getEntity();
  }, [getEntity]);

  useEffect(() => () => setValue([]), []);

  return { value, setValue, getEntity, updateEntity, addEntity, deleteEntity };
};
