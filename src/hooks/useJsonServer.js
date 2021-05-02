import { useEffect, useState } from 'react';
import requestCardByType from '../services/requestCard';

export default (entity) => {
  const [value, setValue] = useState();

  const getEntity = async () => {
    const entities = await requestCardByType('GET', `/${entity}`);
    setValue(entities);
  };

  const updateEntity = async (target) => {
    await requestCardByType('PATCH', `/${entity}/${target.id}`, target);
  };

  const deleteEntity = async (target) => {
    await requestCardByType('DELETE', `/${entity}/${target.id}`);
  };

  useEffect(() => {
    getEntity();
  }, [getEntity]);

  return { value, setValue, getEntity, updateEntity, deleteEntity };
};
