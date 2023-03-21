import { configureStore } from "@reduxjs/toolkit";
import peliculas from './peliculas.slices';
console.log("estoy en el store");

export default configureStore({
    reducer: {
        peliculas
    }
})