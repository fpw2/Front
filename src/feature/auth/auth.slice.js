import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authService";
import { userProfile } from "./profilService";

// Store token //
const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null

// State //
const initialState = {
    loading: false,
    editing: false,
    update: {},
    userInfo: {},
    userToken, // for storing the token what backend return
    error: null,
    success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // action = type: {user/logout}
        logout: (state) => {
            localStorage.removeItem("userToken")
            state.loading = false
            state.userInfo = {}
            state.userToken = null
            state.error = null
        },
        edit: (state) => {
            state.editing = true
        },
        save: (state, {payload}) => {
            state.update= payload
            state.editing = false
        },
        cancel: (state) => {
            state.editing = false
        }
    },
    extraReducers: { // used to manage different state (pending, fullfilled, rejected)
        // login
        [userLogin.pending]: (state) => {
            state.loading = true
            state.error = null
        },
        [userLogin.fulfilled]: (state, { payload }) => { // payload : give me data of the axios request
            state.loading = false
            state.userToken = payload.body.token
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
        },
        // profile
        [userProfile.pending]: (state) => {
            state.loading = true
        },
        [userProfile.fulfilled]: (state, {
            payload
        }) => {
            state.loading = false
            state.userInfo = payload.body
        },
        [userProfile.rejected]: (state, {
            payload
        }) => {
            state.loading = false
            state.error = payload
        },
    }
})

// Actions // 
export const { logout, edit, save, cancel } = userSlice.actions

// Reducer //
export const userReducer = userSlice.reducer



