import React from 'react';
import User from './User';

const UsersList = () => {
  const usersToRender = [
    {
      id: '1',
      name:
        'xxx',
    },
    {
      id: '2',
      name: 'yyy',
    }
  ];

  return (
    <div>
      {usersToRender.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;