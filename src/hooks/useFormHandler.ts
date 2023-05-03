import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'types/Card';
import { getFormData } from 'utils/formDataGetter';
import { setLocalStorage } from 'utils/localStorage';
import { areValidInfo } from 'validator';

export const useFormHandler = (cardInfo: Card) => {
  const navigate = useNavigate();
  const bank = cardInfo.bank;

  const handleForm = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;
    const formDataObject = Object.fromEntries(formData);

    if (!bank) {
      alert('카드사를 선택해주세요.');
      return;
    }

    if (areValidInfo(formDataObject)) {
      navigate('/card-name');
    } else {
      alert('값을 모두 입력해 주세요.');
    }
  };

  return { handleForm };
};
