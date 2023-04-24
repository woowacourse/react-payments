export const getFormData = (target: EventTarget) => {
  if (!(target instanceof HTMLFormElement)) return;

  return new FormData(target);
};
