import React from "react";

export const errorState = {
  errorMessage: "",
};

export const ErrorContext = React.createContext(errorState);
