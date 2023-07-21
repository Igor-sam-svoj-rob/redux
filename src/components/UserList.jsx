import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((store) => store.users);

  const renderCard = () =>
    users.map((user) => (
      <>
        <div key={user.id}>
          <h2>{user.ime}</h2>
          <p>{user.email}</p>
        </div>
        <div>
          <Link to={`/edit-user/${user.id}`}>
            <FaEdit />
          </Link>
          <FaTrashAlt />
        </div>
      </>
    ));

  return (
    <>
      <Link to="/add-user">
        <Button />
      </Link>
      {users.length ? renderCard() : <p>Nema korisnika</p>}
    </>
  );
};
3;
export default UserList;
