export const confirmDialog = async (message: string): Promise<boolean> => {
  return Promise.resolve(window.confirm(message));
};
