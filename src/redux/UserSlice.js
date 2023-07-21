import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    ime: "Ivan",
    email: "ivan@ivan.hr",
  },
  {
    id: 2,
    ime: "Maja",
    email: "maja@maja.hr",
  },
];

const UserSlice = createSlice({
  name: "users",
  initialState,
});

export default UserSlice.reducer;
