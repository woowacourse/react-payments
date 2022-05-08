import { createContext } from 'react';
import { nanoid } from 'nanoid';

import { Layout } from '../components/common/styled';

import { useNavigate } from 'react-router-dom';
import { getStorage, setStorage } from '../utils/localStorage';
import { ComponentSelector } from '../components/common/ComponentSelector';
import { CardRegister } from '../components/CardRegister';
import { useComponentSelector } from '../hooks/useComponentSelector';
import { CardNickName } from '../components/CardNickName';
// import { useContext } from 'react';
import { initialCardInfo } from '../constants/card';

export const CardInfoContext = createContext();

export const CardRegisterPage = () => {
  // const first = useContext(second);
  const navigate = useNavigate();

  const handleSubmitCardInfo = () => {
    const id = nanoid();
    const { password, CVC, ...safeCardInfo } = cardInfo;
    const uploadCardInfo = { ...safeCardInfo, id: [id] };

    const storedIds = getStorage('cardIds');
    const storedCardInfos = getStorage('cardInfos');

    setStorage('cardIds', storedIds.concat(id));
    setStorage('cardInfos', storedCardInfos.concat(uploadCardInfo));

    navigate('/react-payments');
  };

  const [selected, showNextComponent] = useComponentSelector();

  return (
    <Layout>
      <CardInfoContext.Provider value={initialCardInfo}>
        <ComponentSelector selected={selected}>
          <CardRegister onSubmit={showNextComponent} />
          <CardNickName />
        </ComponentSelector>
      </CardInfoContext.Provider>
    </Layout>
  );
};
