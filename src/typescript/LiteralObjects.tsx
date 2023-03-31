// type,class,interface,enum,object,object literal,object type,object type literal
interface Persona {
  fullName: string;
  age: number;
  address: Direction;
}
interface Direction {
  country: string;
  city: string;
  houseNumber: number;
}
const LiteralObjects = () => {
  const person: Persona = {
    fullName: 'John',
    age: 21,
    address: {
      country: "Canada",
      city: "Toronto",
      houseNumber: 342,
    }
  };
  return (
    <>
      <h3>LiteralObjects</h3>
      <code>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </code>
    </>
  );
};

export default LiteralObjects;