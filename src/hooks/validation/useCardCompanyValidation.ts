import { RULES } from '../../constants';
import type { CardInfo } from '../../types';
import { validate, validateAll } from '../../utils';
import type { FormValue } from '../useAddCardForm';

export default function useCardCompanyValidation() {
  const rules = [RULES.required];

  const getErrorStatuses = (value: CardInfo['cardCompany']): FormValue['cardCompany']['errorStatuses'] =>
    [validateAll(rules, value)] as FormValue['cardCompany']['errorStatuses'];

  const validateOnComplete = (
    value: CardInfo['cardCompany'],
  ): {
    errorStatuses: FormValue['cardCompany']['errorStatuses'];
    isValid: boolean;
  } => {
    const errorStatus = validate(rules, 'onComplete', value) as FormValue['cardCompany']['errorStatuses'][0];
    return {
      errorStatuses: [errorStatus],
      isValid: errorStatus === null,
    };
  };

  return { rules, getErrorStatuses, validateOnComplete };
}
