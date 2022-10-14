import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// createAsyncThunk génère les 3 types d'action de cyle de vie pending, fulfilled et rejected
export const userProfile = createAsyncThunk(
    "/profile",
    async (arg, { getState, rejectWithValue }) => {
        try {
            // get user data from store
            const { user } = getState()
            const config = {
                headers: {
                    Authorization: `Bearer${user.userToken}`,
                },
            }
            const { data } = await axios.post("http://localhost:3001/api/v1/user/profile",{}, config)
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