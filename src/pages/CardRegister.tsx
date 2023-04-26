import Layout from "src/components/@common/Layout";
import CardRegisterForm from "src/components/registerForm/cardRegisterForm";
import { CardInfoProvider } from "src/context/CardInfoContext";

function CardRegister() {
  return (
    <Layout>
      <CardInfoProvider>
        <CardRegisterForm />
      </CardInfoProvider>
    </Layout>
  );
}

export default CardRegister;
