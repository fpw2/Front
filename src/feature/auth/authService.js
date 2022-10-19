import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// createAsyncThunk génère les 3 types d'action de cyle de vie pending, fulfilled et rejected
export const userLogin = createAsyncThunk(
    "user/login",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }
            const {data} = await axios.post("http://localhost:3001/api/v1/user/login", {
                    email: username,
                    password: password
                },
                config
            )
            // store user's token in local storage
            localStorage.setItem("userToken", data.body.token)
            return data
        } catch (error) {
            // return custom error message from API 
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)



