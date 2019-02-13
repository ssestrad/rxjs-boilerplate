export function tif(conditional) {
  return string => (conditional ? string : '');
}

export default {
  tif,
};
