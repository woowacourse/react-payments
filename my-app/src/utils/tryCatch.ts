export const tryCatch = async <T>(
  f: () => Promise<T>,
  onError: (error: unknown) => T,
): Promise<T> => {
  try {
    return await f();
  } catch (error) {
    return onError(error);
  }
};
