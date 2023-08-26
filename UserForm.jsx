import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'UPDATE_USER',
      payload: { username, age },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default UserForm;
