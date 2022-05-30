import React from "react";

import { FallbackProps } from "./ErrorBoundary";

export default function Error({ message, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="not-found flex-column-center">
      <div className="not-found-description">{message}</div>
      <button className="not-found-redirect-button" onClick={resetErrorBoundary}>
        새로 고침
      </button>
    </div>
  );
}
