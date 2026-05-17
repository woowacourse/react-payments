export const getSearchParamsFromObject = <T extends {}>(params: T) => {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    searchParams.set(key, String(value));
    // TODO: value가 object나 array인 경우?!
  }
  return searchParams;
};
