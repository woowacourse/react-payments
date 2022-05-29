import CardNumberProvider from "provider/CardNumberProvider";
import CardPasswordProvider from "provider/CardPasswordProvider";
import CardTypeProvider from "provider/CardTypeProvider";
import ExpireDateProvider from "provider/ExpireDateProvider";
import SecurityCodeProvider from "provider/SecurityCodeProvider";
import UserNameProvider from "provider/UserNameProvider";
import React from "react";

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
