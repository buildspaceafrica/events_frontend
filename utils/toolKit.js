const shortText = (text) => {
  if (!text || typeof text !== "string") return "*****";
  return `${text.substring(0, 8)}...${text.substring(text.length - 6)}`;
};

export { shortText };
