import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/UserSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    ime: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ ime: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        ime: values.ime,
        email: values.email,
      })
    );
    navigate("/");
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
      <Button onClick={handleAddUser} />
    </div>
  );
};

export default AddUser;
