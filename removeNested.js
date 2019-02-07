export const findKey = (object, keys) => {
  if (keys && keys[0]) {
    const currentKey = keys[0];
    const currentElement = object[currentKey];
    if (currentElement) {
      if (typeof currentElement === 'object' && Object.keys(currentElement)) {
        return findKey(currentElement, [keys.pop()]);
      }
      return currentElement;
    }
    return NaN;
  }
  return NaN;
};

export const removeFromArray = (array = [], condition, value = null) => {
  const index = condition
    ? array.findIndex(item => findKey(item, condition.split('.')) === value)
    : array.findIndex(item => item === value);
  const returnedArray =
    index > -1
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : [...array];
  return returnedArray;
};
