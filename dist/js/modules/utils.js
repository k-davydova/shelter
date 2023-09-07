const getResource = async src => {
  const res = await fetch(src);
  const data = await res.json();
  return data;
};
export { getResource };