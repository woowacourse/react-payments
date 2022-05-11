import CardNumberProvider from "provider/CardNumberProvider";
import CardPasswordProvider from "provider/CardPasswordProvider";
import CardTypeProvider from "provider/CardTypeProvider";
import ExpireDateProvider from "provider/ExpireDateProvider";
import SecurityCodeProvider from "provider/SecurityCodeProvider";
import UserNameProvider from "provider/UserNameProvider";

const FormDataProvider = ({ children }) => {
  return (
    <CardTypeProvider>
      <CardNumberProvider>
        <ExpireDateProvider>
          <UserNameProvider>
            <SecurityCodeProvider>
              <CardPasswordProvider>{children}</CardPasswordProvider>
            </SecurityCodeProvider>
          </UserNameProvider>
        </ExpireDateProvider>
      </CardNumberProvider>
    </CardTypeProvider>
  );
};

export default FormDataProvider;
