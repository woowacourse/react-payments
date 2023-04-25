export const getFormData = (target: EventTarget) => {
  if (!(target instanceof HTMLFormElement)) return;

  const formData = new FormData(target);

  return Object.fromEntries(formData);
};
