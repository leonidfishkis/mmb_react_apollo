import React from 'react';
import User from './User';
import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    users {
      name
      id
    }
  }
`;

const UsersList = () => {
  const { data, error, loading } = useQuery(USERS_QUERY);
  //console.log(loading)
  //console.log(error)
  //console.log(data)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data && (
        <>
          {data.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
};

export default UsersList;