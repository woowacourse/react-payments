import React from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../constants/routes';

export default function useHistory() {
  const navigate = useNavigate();

  const goBack = () => navigate(ROUTES.PREV);

  return { navigate, goBack };
}
