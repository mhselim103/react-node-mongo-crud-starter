import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const nameChange = (e) => {
    const updatedUser = { ...user };
    updatedUser.name = e.target.value;
    setUser(updatedUser);
  };
  const emailChange = (e) => {
    const updatedUser = { ...user };
    updatedUser.email = e.target.value;
    setUser(updatedUser);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Updated User Successfully");
        }
      });
  };
  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>
        Name:{user.name} Email:{user.email}
      </h1>
      <h2>{id}</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" onChange={nameChange} value={user.name || ""} />
        <input type="email" onChange={emailChange} value={user.email || ""} />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
