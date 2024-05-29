import { createSlice } from "@reduxjs/toolkit";

const initalExperience = {
    expList : []
}

export const expSlice = createSlice({
    name : "experienceList",
    initialState : initalExperience,
    reducers : {
        addExperience : (state, action)=>{
            state.expList.push(action.payload)
        },
        deleteExperience : (state,action)=>{
             state.expList = state.expList.filter((exp,index)=>{
                return index != action.payload
              })
        },
        editExperience : (state,action)=>{

        }
    }
})

export const {addExperience, deleteExperience, editExperience} = expSlice.actions;
export default expSlice.reducer;