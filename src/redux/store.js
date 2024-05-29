import {configureStore} from "@reduxjs/toolkit"
import resumeReducer from "./resumes"
import experienceReducer from "./expToRb"
import skillReducer  from "./skillToRb"
import inputReducer from "./inputs"

const store = configureStore({
    reducer : {
        resumeList : resumeReducer,
        experienceList : experienceReducer,
        skillslice : skillReducer,
        userInputs : inputReducer
    }
})

export default store