import { userProfile } from "./profilService";
import { userEditProfile } from "./profilService";
import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authService";

// localStorage //
const userToken = localStorage.getItem("userToken") ? localStorage.getItem("userToken") : null

// State //
const initialState = {
    loading: false,
    editing: false,
    userInfo: {},
    userToken, // for storing the token what backend return
    error: null,
    success: null,
    userRemember: false
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
        cancel: (state) => {
            state.editing = false
        },
        remember: (state, {payload}) => {
            console.log("payload",payload)
            state.userRemember = !state.userRemember
            if(state.userRemember){
                localStorage.setItem("username", payload)
            }else{
                localStorage.removeItem("username")
            }
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
            state.success = true
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false
            state.error = payload
            state.success = false
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
        // update profile
        [userEditProfile.pending]: (state) => {
            state.loading = true
        },
        [userEditProfile.fulfilled]: (state, {
            payload
        }) => {
            state.loading = false
            state.editing = false
            state.userInfo = payload.body
        },
        [userEditProfile.rejected]: (state, {
            payload
        }) => {
            state.loading = false
            state.error = payload
        }     
    }
})

// Actions // 
export const { logout, edit, save, cancel, remember } = userSlice.actions

// Reducer //
export const userReducer = userSlice.reducer



