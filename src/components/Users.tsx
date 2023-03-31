import { useUsers } from '../hooks/useUsers';
import { User } from '../interfaces/reqRes';

export const Users = () => {
  const { users, nextPage, backPage } = useUsers();
  const renderItem = ({ id, first_name, avatar, email }: User) =>
    <tr key={id + first_name}>
      <th scope="row">{id}</th>
      <td>
        <img src={avatar} alt={first_name} style={{ width: 30, borderRadius: 100 }} />
      </td>
      <td>{first_name}</td>
      <td>{email}</td>
    </tr>;



  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(renderItem)}
        </tbody>
        <tfoot>
          <tr>
            <td><button className="btn btn-danger m-3" onClick={backPage}>Back</button></td>
            <td>
              <button className="btn btn-primary m-3" onClick={nextPage}>Next</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
