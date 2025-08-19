import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"

const loading = () => {
    return {
        type: "LOADING"
    }
}
const errorMsg = (msg) => {
    return {
        type: "ERROR",
        payload: msg
    }
}

const registerSuc = () => {
    return {
        type: "REGISTER"
    }
}

export const registerAsync = (data) => {
    return async (dispatch) => {
        dispatch(loading());
        try {
            let refDoc = await createUserWithEmailAndPassword(auth, data.email, data.password);
           dispatch(registerSuc());
        } catch (error) {
            console.log(error);
            dispatch(errorMsg(error.message))
        }
    }
}