import React, { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    ime: "",
    email: "",
  });

  const handleEditUser = () => {
    setValues({ ime: "", email: "" });
    navigate("/");
  };

  return (
    <div>
      <TextInput
        label="ime"
        inputProps={{ type: "text", placeholder: "Ime" }}
        value={values.ime}
        onChange={(event) => setValues({ ...values, ime: event.target.value })}
      />
      <TextInput
        label="Email"
        inputProps={{ type: "text", placeholder: "E-mail" }}
        value={values.email}
        onChange={(event) =>
          setValues({ ...values, email: event.target.value })
        }
      />
      <Button onClick={handleEditUser} />
    </div>
  );
};

export default EditUser;
