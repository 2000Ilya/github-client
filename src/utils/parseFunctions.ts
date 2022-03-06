export const getFirstLetter = (text: string): string => {
  if (text.length !== 0) {
    return text[0];
  }
  return "";
};
