export const tryCatch = async <T, E>(
  f: () => Promise<T>,
  onError: (error: unknown) => E,
): Promise<T | E> => {
  try {
    return await f();
  } catch (error) {
    return onError(error);
  }
};
