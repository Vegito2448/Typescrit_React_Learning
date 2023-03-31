import { useState } from 'react';

export const Counter = () => {
  const [valor, setValor] = useState<number>(0);
  const add = (num: number) => {
    setValor(valor + num);
  };
  return (
    <>
      <h3>Counter <small>{valor}</small></h3>
      <button className="btn btn-primary" onClick={() => add(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => add(-1)}>
        -1
      </button>
    </>
  );
};
