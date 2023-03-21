import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    peliculas: []
}

export const peliculasSlice = createSlice({
    name: 'peliculas',
    initialState,
    reducers: {
        setPeliculas: (state, action) => {
            state.peliculas = action.payload
        }
    }
})
console.log("Estoy en el slice")
export const { setPeliculas } = peliculasSlice.actions;
export default peliculasSlice.reducer;

export const conseguirPeliculas = () => {
    console.log("en la funcion")
    return function (dispatch) {
        console.log("Dentro de la function que va a despachar")
        axios.get("http://localhost:3020/")
            .then((response) => {
                console.log(response)
                dispatch(setPeliculas(response))
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                console.log("Request completed")
            })

    }
}

//export const conseguirPeliculas = () => (dispatch) => {
    //axios
      //.get("http://localhost:3020/")
     // .then((response) => {
 //       /* dispatch(setPeliculas(response.data.data)); */
   //     console.log(response)
 //     })
  //    .catch((error) => console.log(error));
 // };


