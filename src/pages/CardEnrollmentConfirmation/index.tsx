import React from 'react';
import { useLocation } from 'react-router-dom';

function CardEnrollmentConfirmation() {
  const location = useLocation();
  const data = location.state;

  console.log('cardinfo', data);
  return <div>CardEnrollmentConfirmation</div>;
}

export default CardEnrollmentConfirmation;
