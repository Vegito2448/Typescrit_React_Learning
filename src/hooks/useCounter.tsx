import { useState } from 'react';

export const useCounter = (initialValue: number = 0) => {
  const [valor, setValor] = useState<number>(initialValue);
  const add = (num: number) =>
    setValor(prevValue => prevValue + num);
  return {
    valor,
    add
  };

};
