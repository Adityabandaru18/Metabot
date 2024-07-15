import { createSlice } from "@reduxjs/toolkit";

export const uidSlice = createSlice({
    name: "uid",
    initialState: {
        text: "",
        name: "",
        mail: ""
    },
    reducers: {
        Adduid(state, action) {
            state.text = action.payload;
        },
        Adduser(state, action) {
            state.name = action.payload.name;
            state.mail = action.payload.mail;
        }
    }
});

export const { Adduid, Adduser } = uidSlice.actions;
export default uidSlice.reducer;
