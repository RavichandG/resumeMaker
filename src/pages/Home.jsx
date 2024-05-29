import React, { useEffect } from 'react'
import ResumeBuilder from '../components/ResumeBuilder'
import ResumeModel from '../components/ResumeModel'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Home = () => {

  const current_resume = useSelector(state=>state.resumeList.resumesList)
  const location = useLocation()
  const navigate = useNavigate()
  
  /* useEffect(()=>{
    console.log(current_resume)
   
  }) */
  return (
    
    <div className='homepage'>
       
       <div className='navigation' style={{display:"flex",justifyContent:"space-between",padding:"10px",alignItems:"center"}}>
      <Button onClick={()=>navigate("/")}>go Back</Button>

        <h2 className='resumeName' style={{fontSize:"1.5rem"}}> {location.state.name}</h2>
       
       <Button className="logout">Logout</Button>
       </div>
        <div className='resumepart'>   
               
        <ResumeBuilder></ResumeBuilder>
        
        <ResumeModel></ResumeModel>

        </div>

        <footer style={{height:"5rem",width:"100%",backgroundColor:"black",marginTop:"1rem"}}>

        </footer>

    </div>
  )
}

export default Home