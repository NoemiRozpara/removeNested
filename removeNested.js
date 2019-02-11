export const findKeyValue = (object, keys) => {
  const splittedKeys = keys.split('.');

  const findValue = (objectToSearchIn, keysArray) => {
    if (keysArray && keysArray[0]) {
      const currentKey = keysArray[0];
      const currentElement = objectToSearchIn[currentKey];
      if (currentElement) {
        if (typeof currentElement === 'object' && Object.keys(currentElement)) {
          return findValue(currentElement, [keysArray.pop()]);
        }
        return currentElement;
      }
      return NaN;
    }
    return NaN;
  };

  return findValue(object, splittedKeys);
};

export const removeFromArray = (array = [], condition, value = null) => {
  const index = condition
    ? array.findIndex(item => findKeyValue(item, condition) === value)
    : array.findIndex(item => item === value);
  return index > -1
    ? [...array.slice(0, index), ...array.slice(index + 1)]
    : array;
};
