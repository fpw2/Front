import { configureStore } from "@reduxjs/toolkit"
import { themeReducer } from "../feature/theme.slice"
import { loginReducer } from "../feature/auth/auth.slice"

const store = configureStore({
    reducer: {
        theme: themeReducer,
        login: loginReducer
    }
})

export { store }



