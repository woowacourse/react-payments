import { Layout } from '../components/common/styled';

import { ComponentSelector } from '../components/common/ComponentSelector';
import { CardRegister } from '../components/CardRegister';
import { useComponentSelector } from '../hooks/useComponentSelector';
import { CardNickName } from '../components/CardNickName';
import { cardInfoProvider } from '../providers/CardInfoProvider';

export const CardRegisterPage = () => {
  const { CardInfoContext, value } = cardInfoProvider();
  const [selected, showNextComponent] = useComponentSelector();

  return (
    <Layout>
      <CardInfoContext.Provider value={value}>
        <ComponentSelector selected={selected}>
          <CardRegister onSubmit={showNextComponent} />
          <CardNickName cardInfo={value.cardInfo} />
        </ComponentSelector>
      </CardInfoContext.Provider>
    </Layout>
  );
};
