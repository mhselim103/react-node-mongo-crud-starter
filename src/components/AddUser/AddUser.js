import React, { useRef } from "react";

const AddUser = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const newUser = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added user");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h2>This is Add User</h2>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" name="" id="" />
        <input ref={emailRef} type="email" name="" id="" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddUser;
