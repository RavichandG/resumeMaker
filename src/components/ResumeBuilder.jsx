import React, { useState } from 'react'
import { Progress,Input } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import { Button } from '@chakra-ui/react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInput } from '../redux/inputs'

const ResumeBuilder = () => {
    const skills = useSelector(state=>state.skillslice.skillState)
    const experience = useSelector(state=>state.experienceList.expList)
    const dispatch = useDispatch()

  const [totalInfo, setTotalInfo] = useState([]);
  const userFirstName = useRef();
  const userLastName = useRef();
  const userJobTitle = useRef();

  const userEmail = useRef();
  const userCountry = useRef();
  const userCity = useRef();
  const userPhoneNumber = useRef();

  const userCollege = useRef();
  const userDegree = useRef()

  const userSummaryText = useRef();

  

  function createResume()
  {
       const userInfoBundle = {
        firstname : userFirstName.current.value,
        lastname : userLastName.current.value,
        jobtitle : userJobTitle.current.value,
        email : userEmail.current.value,
        country : userCountry.current.value,
        city : userCity.current.value,
        phonenumber : userPhoneNumber.current.value,
        college : userCollege.current.value,
        degree : userDegree.current.value,
        summary : userSummaryText.current.value,
        skills : skills,
        experience : experience
       }
      
      
       dispatch(addInput(userInfoBundle))
  }

  return (
    <div className="resumebuilderSection">
    <div className='progressbar'>
    <Progress value={100} size='xs' colorScheme='blue' />
     progress
    </div>

    <div className="personalInfo">
        <h3 style={{fontSize:"2rem",textDecoration:"underline"}}>Personal Information</h3>

        <div className='personalDetails'>
            <div className='detailsColumn'>
            <div> 
                <label>Wanted Job Title</label>
                <Input  size='md' border="2px solid black" ref={userJobTitle}/>
            </div>

            <div> 
                <label>First Name</label>
                <Input  size='md' border="2px solid black" ref={userFirstName}/>
            </div>

            <div> 
                <label>Last Name</label>
                <Input  size='md' border="2px solid black" ref={userLastName}/>
            </div>


            </div>
           

            <div className='deatilsColumnTwo'>
            <div> 
                <label>Email</label>
                <Input  size='md' border="2px solid black" ref={userEmail}/>
            </div>
            <div> 
                <label>Phone</label>
                <Input  size='md' border="2px solid black" ref={userPhoneNumber}/>
            </div>

            <div> 
                <label>Country</label>
                <Input  size='md' border="2px solid black" ref={userCountry}/>
            </div>

            <div> 
                <label>City</label>
                <Input  size='md' border="2px solid black" ref={userCity}/>
            </div>
            </div>
            
        </div>
    </div>

    <div className="PersonalSummary">
    <h3 style={{fontSize:"2rem",textDecoration:"underline",marginBottom:"1rem"}}>Personal SummarY</h3>
    <p>Write an overview of your professional accomplishments and achievements. Outline your most relevant skills, experiences, and traits that make you an ideal candidate for the job you’re applying to.</p>
    <Textarea placeholder='Enter Summary' style={{marginTop:"2rem"}} border="2px solid black" ref={userSummaryText} value="I am a keen, hard working, reliable and excellent time keeper. I am a bright and receptive person, able to communicate well with people at all levels. I am good at working using my own initiative and I am flexible in my approach to work duties. I have a good sense of humour and a pleasant approach."/>
    </div>

   <Experience></Experience>

    <div className='education' style={{marginTop:"2rem"}}>
    <h3 style={{fontSize:"2rem",textDecoration:"underline",marginBottom:"1rem"}}>Education</h3>
       <div className="educationdetails">
        <div className='college'>
            <label style={{marginRight:"1rem"}}>School or college</label>
        <Input  size='md' width="30rem" border="2px solid black" ref={userCollege}/>
        </div>

        <div className='degree' style={{marginTop:"2rem"}}>
            <label style={{marginRight:"1rem"}}>Degree name</label>
        <Input  size='md' width="30rem" border="2px solid black" ref={userDegree}/>
        </div>
        
       </div>
    </div>

    
   <Skills></Skills>


<div style={{width:"100%",display:"flex",justifyContent:"center",marginBottom:"3rem"}}>
<Button style={{marginTop:"1rem"}} onClick={createResume}>Create Resume</Button>
</div>
   
     
    </div>
  )
}

export default ResumeBuilder