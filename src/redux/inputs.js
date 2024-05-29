import {createSlice} from "@reduxjs/toolkit"



const initialState = {
   resumes :  []
  }

export const inputSlice = createSlice({
    name : "userInputs",
    initialState : initialState,
    reducers : {
        addInput : (state,action)=>{
            if(state.resumes.length > 0)
                {
                    state.resumes.pop()
                }
            
            state.resumes.push(action.payload)
        }
    }
})

export const {addInput} = inputSlice.actions;
export default inputSlice.reducer;
