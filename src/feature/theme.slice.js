import { createSlice } from '@reduxjs/toolkit'

// State //
const initialState = true

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: (state) => { // l'action toggle ("theme/toggle")
        if(state) {
          document.body.classList.add("dark")
        }
        if(!state) {
          document.body.classList.remove("dark")
        }
        return state === true ? false : true // return true or false
    }
  }
})

// Reducer //
const themeReducer = themeSlice.reducer

// Actions //
const {toggle} = themeSlice.actions

// export //
export { themeReducer, toggle }




