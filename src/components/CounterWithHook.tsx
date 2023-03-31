import { useCounter } from '../hooks/useCounter';

export const CounterWithHook = () => {
  const { valor, add } = useCounter(1);
  return (
    <>
      <h3>Counter With Hook <small>{valor}</small></h3>
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
