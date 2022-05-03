import { useCallback, useState } from 'react';

const useModal = (initialState) => {
  const [modalVisible, setModalVisible] = useState(initialState);

  const handleModal = useCallback(() => {
    setModalVisible((prevModalVisible) => !prevModalVisible);
  }, []);

  return [modalVisible, handleModal];
};

export default useModal;
