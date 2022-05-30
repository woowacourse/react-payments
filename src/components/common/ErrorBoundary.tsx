import React, { Component, PropsWithChildren } from "react";

import Error from "./Error";

interface FallbackProps {
  message: string;
}

interface ErrorBoundaryProps {
  Fallback: React.ComponentType<FallbackProps>;
}

interface State {
  hasError: boolean;
  error: Error;
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    const { Fallback } = this.props;

    if (this.state.hasError) {
      return <Fallback message={this.state.error.message} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
