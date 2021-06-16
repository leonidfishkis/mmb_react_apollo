import React from 'react';

const User = (props) => {
  const { user } = props;
  return (
    <div>
      <div>
        {user.name} ({user.id})
      </div>
    </div>
  );
};

export default User;