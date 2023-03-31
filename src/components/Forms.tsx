import { useForm } from "../hooks/useForm";

export const Forms = () => {
  const { form, onChange, email, password } = useForm({ email: 'test@mail.com', password: '123456' });

  return (
    <>
      <h3>Forms</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email} onChange={({ target }) => onChange(target.value, 'email')} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={({ target }) => onChange(target.value, 'password')} />
        </div>
        <code>
          <pre>{JSON.stringify(form, null, 2)}</pre>
        </code>
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button> */}
      </form>
    </>
  );
};
