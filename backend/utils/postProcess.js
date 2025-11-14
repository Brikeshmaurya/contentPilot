export const cleanOutput = (txt) => {
  return txt
    .replace(/\n{3,}/g, "\n\n")
    .replace(/\s+\n/g, "\n")
    .trim();
};
