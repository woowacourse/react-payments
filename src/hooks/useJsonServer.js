import { useCallback, useEffect, useState } from 'react';
import requestCardByType from '../api/requestCard';

export default (entity) => {
  const [value, setValue] = useState();

  const getEntity = useCallback(async () => {
    const entities = await requestCardByType('GET', `/${entity}`);
    setValue(entities);
  }, [entity]);

  const updateEntity = async (target) => {
    await requestCardByType('PATCH', `/${entity}/${target.id}`, target);
    getEntity();
  };

  const addEntity = async (target) => {
    await requestCardByType('POST', `/${entity}`, target);
    getEntity();
  };

  const deleteEntity = async (targetId) => {
    await requestCardByType('DELETE', `/${entity}/${targetId}`);
    getEntity();
  };

  useEffect(() => {
    getEntity();
  }, [getEntity]);

  useEffect(() => () => setValue([]), []);

  return { value, setValue, getEntity, updateEntity, addEntity, deleteEntity };
};
