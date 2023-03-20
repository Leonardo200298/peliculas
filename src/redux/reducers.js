import { PELICULAS } from "./actrions/actios-types";

const initialState = {
    peliculas: []
}

const reducer = (state = initialState, { type, payload }) => {
    console.log(state.peliculas)
    switch (type) {
        case PELICULAS:
            return {
                peliculas: payload


            };

        default:
            return { ...state };
    }
}
export default reducer;