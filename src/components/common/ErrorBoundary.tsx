import React, { Component, PropsWithChildren } from "react";
export interface FallbackProps {
  message: string;
  resetErrorBoundary: () => void;
}

interface ErrorBoundaryProps {
  Fallback: React.ComponentType<FallbackProps>;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  error: Error;
}

const initialState: State = {
  hasError: false,
  error: null,
};

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  resetErrorBoundary() {
    this.props.onReset?.();
    this.setState(initialState);
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public render() {
    const { Fallback } = this.props;

    if (this.state.hasError) {
      return (
        <Fallback message={this.state.error.message} resetErrorBoundary={this.resetErrorBoundary} />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
