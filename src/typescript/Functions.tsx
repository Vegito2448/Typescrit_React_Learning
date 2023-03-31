
export const Functions = () => {
  const sum = (a: number = 1, b: number = 3): number => {
    return a + b;
  };
  return (
    <>
      <h3>Functions</h3>
      the result is: {sum(1, 10).toFixed(2)}
    </>
  );
};
