import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin } from "./login.service";

const login = createAsyncThunk("/login", async(data, thunkApi) => {
    return await userLogin(data)
})


const loginSlice = createSlice({
    name: "loggin",
    initialState: {
        userToken: null,
        error: false,
        loading: false,
        success: false,
        messageError: null
    },
    reducers: {
        set: (state, action) => { // state = draft (immer)
    
        }

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
        })
        .addCase(login.fulfilled, (state, {payload}) => {
            state.loading = false
            state.success = true
            state.userToken = payload
        })
        .addCase(login.rejected, (state, {payload}) => {
            state.userToken = null
            state.loading = false
            state.error = true
            state.messageError = payload
        })
    }   
})

const {loginReducer} = loginSlice.reducer

export {  login, loginReducer }