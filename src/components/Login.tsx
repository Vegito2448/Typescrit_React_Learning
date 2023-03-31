import { useEffect, useReducer } from "react";
interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}
const initialState: AuthState = {
  validating: true,
  token: null,
  username: '',
  name: '',
};
type LoginPayload = { username: string; name: string; };

type AuthAction =
  | { type: 'logout'; }
  | { type: 'login', payload: LoginPayload; };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return { validating: false, token: null, username: '', name: '' };
    case 'login': {
      const { username, name } = action.payload;
      return { ...state, token: 'ABC123', validating: false, username, name };
    }
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1550);

  }, []);

  const login = () =>
    dispatch({ type: 'login', payload: { username: 'Vegito2448', name: 'Peña' } });
  const logout = () =>
    dispatch({ type: 'logout' });


  if (validating)
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validating...</div>
      </>
    );

  return (
    <>
      <h3>Login</h3>
      {
        token ?
          <div className="alert alert-success">Authenticated as: {name}</div> :
          <div className="alert alert-danger">Not Authenticated</div>
      }
      {
        token ?
          <button className="btn btn-danger m-3" onClick={logout}>Log Out</button>
          :
          <button className="btn btn-primary m-3" onClick={login}>Login</button>
      }
    </>
  );
};
