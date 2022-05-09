import React from "react";

export const errorState = {
  errorMessage: "에러 메시지가 입력되지 않았습니다.",
};

export const ErrorContext = React.createContext(errorState);
