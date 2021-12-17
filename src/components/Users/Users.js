import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  const UpdateUser = (id) => {
    history.push(`/users/update/${id}`);
  };
  const deleteUser = (id) => {
    const proceed = window.confirm("are you sure , you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    }
  };
  return (
    <div>
      <h2>Total users : {users.length}</h2>
      <ul>
        {users?.map((user) => (
          <li>
            {" "}
            {user.name}:: {user.email}{" "}
            <button onClick={() => UpdateUser(user._id)}>Update</button>{" "}
            <button onClick={() => deleteUser(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
