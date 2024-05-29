import { createSlice } from "@reduxjs/toolkit";

const initialSkillState = {
    skillState : []
}

export const skillSlice = createSlice({
    name : "skillslice",
    initialState : initialSkillState,
    reducers : {
        addSkill : (state, action)=>{
             state.skillState.push(action.payload)
        },
        removeSkill : (state, action)=>{
            state.skillState = state.skillState.filter((skill,index)=>{
                return index != action.payload
            })
        }
    }
})


export const {addSkill, removeSkill} = skillSlice.actions;
export default skillSlice.reducer