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

// Actions //

// export // 
export {
    loginReducer
}

// export { login }

// extraReducers: (builder) => {
//     builder.addCase(login.pending, (state) => {
//         state.loading = true
//     })
//     .addCase(login.fulfilled, (state, {payload}) => {
//         state.loading = false
//         state.success = true
//         state.userToken = payload
//     })
//     .addCase(login.rejected, (state, {payload}) => {
//         state.userToken = null
//         state.loading = false
//         state.error = true
//         state.messageError = payload
//     })
// } 