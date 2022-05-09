import React, { Component, ErrorInfo, ReactNode } from "react";

import Error from "./Error";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    if (this.state.hasError) {
      return <Error message={this.state.error.message} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
