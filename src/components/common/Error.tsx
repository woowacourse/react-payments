import React from "react";

export default function Error({ message }: { message?: string }) {
  return (
    <div className="not-found flex-column-center">
      <div className="not-found-description">{message}</div>
      <button className="not-found-redirect-button" onClick={() => window.location.reload()}>
        새로 고침
      </button>
    </div>
  );
}
