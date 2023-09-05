import { configureStore } from "@reduxjs/toolkit";
import translateSlice from "./translate-slice";


//Create store and configure it
const store = configureStore({
    reducer: translateSlice.reducer
});

export default store;