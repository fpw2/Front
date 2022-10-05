import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: "theme",
  // State //
  initialState: true,
  reducers: {
    toggle: (state) => { // l'action toggle ('theme/toggle')
        if(state) {
          document.body.classList.add("dark")
        }
        if(!state) {
          document.body.classList.remove("dark")
        }
        return state === true ? false : true
    }
  }
})

// Reducer //
const themeReducer = themeSlice.reducer

// Actions //
const { toggle } = themeSlice.actions

//
export { themeReducer, toggle }




