import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [userList, setUserlist] = useState([]);

  const addUser = function (userName, userAge) {
    setUserlist((prevState) => {
      return [...prevState, { name: userName, age: userAge }]
    });
  }

  return (
    <div>
      <AddUser onAddUser={ addUser }></AddUser>
      <UsersList users={ userList }></UsersList>
    </div>
  );
}

export default App;
