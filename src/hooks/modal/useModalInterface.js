import { useState } from "react";

const useModalInterface = (initialPassageData) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState(initialPassageData);

  const passData = (key, value) => {
    if (data[key] === undefined) {
      console.error(
        "useModalInterface - passData() 에러 : 해당 key 값이 존재하지 않습니다."
      );
      return;
    }

    setData({
      ...data,
      [key]: value,
    });
  };

  const dataPassage = {
    data,
    passData,
  };

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return { isModalVisible, openModal, closeModal, dataPassage };
};

export default useModalInterface;
