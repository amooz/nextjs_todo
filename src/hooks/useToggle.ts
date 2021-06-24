import { useState } from 'react';

export function useToggle(defaultState = false) {
  const [value, setValue] = useState(defaultState);
  const setTrue = () => setValue(() => true);
  const setFalse = () => setValue(() => false);
  const toggleValue = () => setValue((value) => !value);

  return {
    value,
    setTrue,
    setFalse,
    setValue,
    toggleValue,
  };
}
