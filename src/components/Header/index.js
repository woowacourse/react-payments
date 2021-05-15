import React from 'react';

export default function Header({ children }) {
  return (
    <header className="header w-100 d-flex items-center fixed top-0 bg-color-white px-5 py-3">
      {children}
    </header>
  );
}
