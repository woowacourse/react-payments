import CardNumberProvider from "./CardNumberProvider";
import CardPasswordProvider from "./CardPasswordProvider";
import CardTypeProvider from "./CardTypeProvider";
import ExpireDateProvider from "./ExpireDateProvider";
import SecurityCodeProvider from "./SecurityCodeProvider";
import UserNameProvider from "./UserNameProvider";

const FormDataProvider = ({ children }: { children: React.ReactNode }) => {
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
