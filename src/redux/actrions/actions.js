import {PELICULAS} from './action-types';
import axios from 'axios';


export const conseguirPeliculas = ()=>{
    return function (dispatch){
        axios.get("http://localhost:3020/")
        .then((response)=>{
           /*  dispatch({
                type:PELICULAS,
                payload:response.data.results
            }) */
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
}

conseguirPeliculas()


