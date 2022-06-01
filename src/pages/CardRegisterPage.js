import { Layout } from "../components/common/styled";

import { ComponentSelector } from "../components/common/ComponentSelector";
import { CardRegister } from "../components/CardRegister";
import { useComponentSelector } from "../hooks/useComponentSelector";
import { CardNickName } from "../components/CardNickName";
import { CardInfoContextProvider } from "../providers/CardInfoProvider";
import { CardInfoCompleteContextProvider } from "../providers/CardInfoCompleteProvider";

export const CardRegisterPage = () => {
  const [selected, showNextComponent] = useComponentSelector();

  return (
    <Layout>
      <CardInfoContextProvider>
        <CardInfoCompleteContextProvider>
          <ComponentSelector selected={selected}>
            <CardRegister onSubmit={showNextComponent} />
            <CardNickName />
          </ComponentSelector>
        </CardInfoCompleteContextProvider>
      </CardInfoContextProvider>
    </Layout>
  );
};
