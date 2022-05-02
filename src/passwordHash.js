const SECRET_KEY = 20;

const encode = (value) => {
  if (value.trim() === "") return "";
  if (!Number.isInteger(Number(value))) return value;

  return String.fromCharCode(value.charCodeAt(0) + SECRET_KEY);
};

const decode = (value) => {
  if (value.trim() === "") return "";
  if (Number.isInteger(Number(value))) return value;

  return String.fromCharCode(value.charCodeAt(0) - SECRET_KEY);
};

export const Hash = { encode, decode };
