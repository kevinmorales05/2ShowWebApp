import React, { useReducer } from "react";
import FirebaseReducer from "./firebaseReducer";
import FirebaseContext from "./firebaseContext";
import { SINGIN_CORRECTO, SINGOUT_CORRECTO } from "../types";

const FirebaseState = (props) => {
  //state inicial
  const initialState = {
    singIn: false,
  };
  //funcion para ingresar
  const setSingIn = () => {
      const cerrar = true;
    dispatch({
      type: SINGOUT_CORRECTO,
      payload: cerrar,
    });
    console.log("iniciar sesion", state.singIn);
  };
  //funcion para salir
  const setSingOut = () => {
    dispatch({
      type: SINGIN_CORRECTO,
      payload: false,
    });
    console.log("cerrar sesion", state.singIn);
  };
  //useReducer con dispatch para ejectur las funciones
  const [state, dispatch] = useReducer(FirebaseReducer, initialState);
  //similar a use state, retorna state y funcion llamada dispatch, sirve para llamar ciertas funciones
  return (
    <FirebaseContext.Provider
      value={{
        singIn: state.singIn,
        setSingIn,
        setSingOut,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
//en el return van todas las funciones y el state que vamos a hacer disponible en toda la app
//props son las pantallas dentro
export default FirebaseState;
