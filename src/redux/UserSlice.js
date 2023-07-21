import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    ime: "Ivan",
    email: "ivan@ivan.hr",
  },
  {
    id: "2",
    ime: "Maja",
    email: "maja@maja.hr",
  },
];

const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, ime, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.ime = ime;
        existingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
