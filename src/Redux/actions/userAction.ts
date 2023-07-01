import axios from "axios"
import { AppDispatch } from "../Store/Store";
import { setError, setLoading, setUser } from "../Reducers/userReducer";

export const createUser = (userData: {name:string, password: string,  email: string, phone: number}) => {
  console.log("------>",userData);
  
    return async (dispatch: any) => {
        dispatch(setLoading(true))
        // try {
          let { data } = await axios.post(
            "http://localhost:3000/users/createUser",
            userData
          );
        fetch('http://localhost:3000/users/getUsers').then((res)=>{
            res.json().then(resp=> console.log(resp))
        }).catch((err)=>{console.log(err)})
        //   dispatch(setUser(data));
        console.log('resData===>',data)
        //   dispatch(setError({state: false, message: {}}))
        // dispatch(setLoading(false))
        // } catch (error) {
        //     console.log('Ocurrió un error', error)
        // //   dispatch(setError({state: true, message: {error}}))
        // // dispatch(setLoading(false))
        // }
    }
}

/* export const signIn = (user: { name: string, email: string }) => {
  return async function (dispatch: AppDispatch) {
    let { data } = await axios.post(
      "https://ecomerce-production-8f61.up.railway.app/users/login",
      user
    );

    return dispatch({ type: SIGN_IN, payload: data });
  };
}; */
/* export function signUp(user) {
  return async function (dispatch: AppDispatch) {
    let { data } = await axios.post(
      "https://ecomerce-production-8f61.up.railway.app/users/signup",
      user
    );

    return dispatch({ type: SIGN_UP, payload: data });
  };
} */
/* export function logOut() {
  return async function (dispatch: AppDispatch) {
    axios.post("https://ecomerce-production-8f61.up.railway.app/users/logout");

    return dispatch({ type: LOG_OUT });
  };
} */