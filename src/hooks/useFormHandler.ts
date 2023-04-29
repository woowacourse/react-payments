import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'types/Card';
import { getFormData } from 'utils/formDataGetter';
import { setLocalStorage } from 'utils/localStorage';
import { areValidInfo } from 'validator';

export const useFormHandler = (cardInfo: Card) => {
  const navigate = useNavigate();
  const color = cardInfo.color;
  const bank = cardInfo.bank;

  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;
    const formDataObject = Object.fromEntries(formData);

    if (areValidInfo(formDataObject)) {
      setLocalStorage('card', { ...formDataObject, color, bank });

      navigate('/');
    } else {
      alert('값을 모두 입력해 주세요.');
    }
  };

  return { handleForm };
};
