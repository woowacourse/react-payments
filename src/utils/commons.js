const convertFormDataToObject = (formData) => {
  const object = {};

  formData.forEach((value, key) => {
    object[key] = value;
  });

  return object;
};

export default convertFormDataToObject;
