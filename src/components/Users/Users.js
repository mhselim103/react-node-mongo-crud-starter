import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div>
      <h2>Total users : {users.length}</h2>
      <ul>
        {users?.map((user) => (
          <li>
            {" "}
            {user.name}:: {user.email} <button>Update</button>{" "}
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
