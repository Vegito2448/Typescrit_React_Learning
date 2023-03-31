import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqRes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const pageRef = useRef(1);

  const loadUsers = async () => {
    const { data } = await reqResApi.get<ReqResList>('/users', {
      params: {
        page: pageRef.current
      }
    });
    if (data.data.length && pageRef.current <= data.total_pages) {
      setUsers(data.data);
    } else {
      pageRef.current--;
      alert('No more users');
    }
  };

  const nextPage = () => {
    pageRef.current++;
    loadUsers();
  };
  const backPage = () => {
    if (pageRef.current > 1) {
      pageRef.current--;
      loadUsers();
    }
  };

  useEffect(() => {
    // calling the API
    loadUsers();
  }, []);

  return {
    users, nextPage, backPage
  };
};
