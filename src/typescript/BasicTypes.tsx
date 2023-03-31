
const BasicTypes = () => {
  let name: string = 'Peter';
  const age: number = 21;
  const isActive: boolean = true;
  const skills: string[] = ['JavaScript', 'TypeScript', 'React'];
  const skillsLevel: number[] = [1, 2, 3];
  return (
    <>
      <h3>Basic Types</h3>
      name: {name}, age: {age}, is active: {isActive ? 'Yes' : 'No'}
      <br />
      skills: {skills.join(', ')}, skillsLevel: {skillsLevel.join(', ')}
    </>
  );
};

export default BasicTypes;