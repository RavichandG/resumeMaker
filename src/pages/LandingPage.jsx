import React from 'react'
import { Card, CardFooter, CardHeader, CardBody, Heading, Button, Text, Input } from '@chakra-ui/react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addResume } from '../redux/resumes'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {

  const resumeNameRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function nameResume()
  {
       dispatch(addResume(resumeNameRef.current.value)) 

  }
  function openResume(id,name)
  {
   navigate("/resume",{replace:true,state:{id:id,name:name}})
  }

  const resumes = useSelector(state => state.resumeList.resumesList)
  
  return (
    <div>
       <div className='navigation' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <h1 style={{fontSize:"2rem"}}>RESUME BUILDER</h1>
       </div>

       <div className='mainContainer' style={{backgroundColor:"beige"}} overflow="hidden">
       <Card backgroundColor="bisque" width="17rem" height="15rem" display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding="10px">
    
    <Text textAlign="center" fontSize="1.5rem">Create New Resume</Text>
    <Input marginTop="1rem" placeholder='enter resume name' ref={resumeNameRef}></Input>
    <CardFooter>
      <Button onClick={nameResume}>Next</Button>
    </CardFooter>
  </Card>

     <div className='resumecontainer'>
      {
        resumes.map((resume)=>{
          return(
            <div className='resumebox' key={resume.id}>
              <div>
              <h2 style={{textAlign:"center",marginBottom:"1.5rem",fontSize:"1.5rem"}}>{resume.name}</h2>
                   <button className='openResumeButton' onClick={()=>openResume(resume.id,resume.name)}>Open resume</button>
              </div>
                   
            </div>
          )
        })
      }
     </div>
 
       </div>
    </div>
  )
}

export default LandingPage