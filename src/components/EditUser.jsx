import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../redux/UserSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter((user) => user.id === params.id);
  const { ime, email } = existingUser[0];
  const [values, setValues] = useState({
    ime: ime,
    email: email,
  });

  const handleEditUser = () => {
    setValues({ ime: "", email: "" });
    navigate("/");
    dispatch(
      editUser({
        id: params.id,
        ime: values.ime,
        email: values.email,
      })
    );
  };

  return (
    <div>
      <TextInput
        label="Ime"
        value={values.ime}
        onChange={(e) => setValues({ ...values, ime: e.target.value })}
        inputProps={{ type: "text", placeholder: "Ime" }}
      />
      <TextInput
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        inputProps={{ type: "text", placeholder: "E-mail" }}
      />
      <Button onClick={handleEditUser} />
    </div>
  );
};

export default EditUser;
