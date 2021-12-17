import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>Update {user.name}</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default UpdateUser;
