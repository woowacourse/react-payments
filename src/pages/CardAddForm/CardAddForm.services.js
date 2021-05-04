import CARD from '../../constants/card';

// eslint-disable-next-line import/prefer-default-export
export const findCardCompany = (firstInput, secondInput) =>
  Object.values(CARD).find((company) =>
    company.bins.some((binNumber) => {
      const isMatchedFirstInput = firstInput === binNumber.slice(0, 4);
      const isMatchedSecondInput = secondInput.slice(0, 2) === binNumber.slice(4, 6);

      return binNumber.length === 4
        ? isMatchedFirstInput
        : isMatchedFirstInput && isMatchedSecondInput;
    })
  );
