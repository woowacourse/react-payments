import { useRef } from 'react';

const useUUID = (length: number) => {
  const uuids = useRef(Array.from({ length }, () => crypto.randomUUID()));

  return uuids;
};

export default useUUID;
