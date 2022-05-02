import React from 'react';
import * as S from '../styles.js';

export default function ToastModal({ show, children }) {
  return <S.ToastModal show={show}>{children}</S.ToastModal>;
}
