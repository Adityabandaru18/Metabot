import { configureStore } from '@reduxjs/toolkit'
import uidreducer from "./uidslice.jsx";


export const store = configureStore({
    reducer: {
        uid: uidreducer
    },
});