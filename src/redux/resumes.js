import {createSlice, nanoid } from "@reduxjs/toolkit"

export const inititalResumeState = {
    resumesList : []
}

export const resumeListSlice = createSlice({
    name : "resumeList",
    initialState:inititalResumeState,
    reducers : {
        addResume : (state,action)=>{
             const newResume = {
                name : action.payload,
                id : nanoid()
             }

             state.resumesList.push(newResume)

        }
    }
})

export const {addResume} = resumeListSlice.actions
export default resumeListSlice.reducer