import {
    createSlice
} from "@reduxjs/toolkit";
import { userLogin } from "./authService";

// State //
const initialState = {
    loading: false,
    userInfo: {}, // for user object
    userToken: null, // for storing the token what backend return
    success: false, // for monitoring the registration process.
    error: null,
}

const loginSlice = createSlice({
    name: "loggin",
    initialState,
    reducers: {},
    extraReducers: {
        // login user
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.userInfo = payload
            state.userToken = payload.userToken
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // register user reducer...
    }
})

// Reducer //
const loginReducer = loginSlice.reducer

// export // 
export {
    loginReducer
}

