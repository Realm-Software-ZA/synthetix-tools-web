export const truncate = (input: string, limit: number = 250) =>
  input.length > limit ? `${input.substring(0, limit)}...` : input;

export const capitalize = (val: string) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
