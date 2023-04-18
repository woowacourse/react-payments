import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export function Default() {
  return <Card cardNumber="1000100010001000" ownerName="SANGWON" expireDate="09/17" />;
}

export function NameLee() {
  return <Card cardNumber="9123827493820938" ownerName="LEE" expireDate="09/17" />;
}

export function NotHaveInfo() {
  return <Card />;
}
