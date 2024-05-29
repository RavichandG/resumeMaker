import React from 'react'
import { Button } from '@chakra-ui/react'
import { Input,Textarea } from '@chakra-ui/react'
import { useState,useEffect,useRef } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addExperience, deleteExperience, editExperience } from '../redux/expToRb'

const Experience = () => {

    const [showInput, setShowInput] = useState(false)

    const dispatch = useDispatch()
    const expList = useSelector(state=>state.experienceList.expList)

    let jobname = useRef("")
    let joiningdate = useRef("")
    let leavingdate = useRef("")
    let jobInfo = useRef("")

    function handleClick()
    {
        setShowInput(!showInput)
    }
    function addExp()
    {
           console.log(jobname.current.value)
           let joindate = String(joiningdate.current.value).split("T")[0]
           console.log(joindate)
           let leavedate = String(leavingdate.current.value).split("T")[0]
           console.log(leavedate)
           console.log(jobInfo.current.value)

           const expDataObject = {
            jobname:jobname.current.value,
            joinAt:joindate,
            leaveAt:leavedate,
            jobDescription:jobInfo.current.value
           }

         /*   setExprience([expDataObject,...experience]) */

            dispatch(addExperience(expDataObject))
           
           setShowInput(!showInput)
    }

    function deleteExp(index)
    {
        console.log(index)
           dispatch(deleteExperience(index))
    }

    function editExp()
    {

    }

   /*  useEffect(()=>{
        console.log("list")
        console.log(expList)
    }) */
    
  return (
    <div className='experience'>
        <h3 style={{fontSize:"2rem",textDecoration:"underline",marginBottom:"1rem"}}>Experience</h3>
           
           <p style={{marginBottom:"1rem"}}>Include all relevant work experience, internships, extracurricular activities, and volunteer work related to the job you are applying for.</p>
           
            <div className='experienceInput'>
                {
                    expList && expList.map((exp,index)=>{
                        return(<div className='exp' style={{display:"flex",padding:"10px",justifyContent:"space-between",marginTop:"1rem"}} onClick={console.log("item clikced")} key={index} >
                            <div>
                            <h3 style={{fontSize:"1.5rem"}}>{exp.jobname}</h3>
                            <p>{exp.joinAt} - {exp.leaveAt}</p>
                            </div>
                            <div style={{display:"flex",justifyContent:"space-between",padding:"10px",gap:"2rem"}}>
                                <Button onClick={(e)=>deleteExp(index)}>Delete</Button>
                           {/*      <Button onClick={editExp}>Edit</Button> */}
                            </div>


                        </div>)
                    })
                }
                {
                    showInput && <div className='expInput' style={{marginTop:"2rem"}} >
                              <Input  size='md' width="30rem" placeholder='Enter Your job name' border="2px solid black" ref={jobname}/>

                               <div className='startMonth' style={{marginTop:"1rem"}}>
                                <label style={{marginRight:"1rem"}}>start date</label>
                               <Input placeholder='Select Date and Time' size='md' type='datetime-local' width="30rem" ref={joiningdate}/>
                               </div>
                               
                               <div className='endingMonth' style={{marginTop:"1rem"}}>
                                <label style={{marginRight:"1rem"}}>end date</label>
                               <Input placeholder='Select Date and Time' size='md' type='datetime-local' width="30rem" ref={leavingdate}/>
                               </div>
                               
                               <div style={{marginTop:"1rem"}}>
                                <label>Tell about Your job</label>
                               <Textarea placeholder='Tell about your job' border="2px solid black" ref={jobInfo}/>
                               </div>

                               <Button marginTop="1rem" onClick={addExp}>Add Experience</Button>
                               </div>
                }

           

            </div>
           

           <Button marginTop="1rem" onClick={handleClick}>New Experience</Button>
        </div>
  )
}

export default Experience