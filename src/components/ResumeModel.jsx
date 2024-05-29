import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { Button } from '@chakra-ui/react'

const ResumeModel = () => {
  const resumeInfo = useSelector(state=>state.userInputs.resumes)
  const pdfRef = useRef()

  function downLoadResume()
  {
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p','mm','a4',true)
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imageheight = canvas.height;
      const ratio = Math.min(pdfWidth/imageWidth, pdfHeight/imageheight);
      const imgX = (pdfWidth - imageWidth * ratio) / 2;
      const imgY = 30;
      
      pdf.addImage(imgData,'PNG',imgX,imgY,imageWidth*ratio,imageheight*ratio);
      pdf.save('invoice.pdf')
    })
  }
  useEffect(()=>{
    console.log(resumeInfo)
  
  })
  return (
    <div className='resumeModelPart'>
       <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      <Button onClick={downLoadResume}>Download Resume</Button>  
      </div>
      <div>
      {
        resumeInfo[0] &&  <div className="resume" ref={pdfRef} style={{marginTop:"2rem"}}>
        <div className="leftSection">
          <div className='resumeTitle'>
            <div>
            <h2 className='userName' style={{marginBottom:"1rem"}}>{resumeInfo[0].firstname} {resumeInfo[0].lastname}</h2>
            <p className='userTitle'>{resumeInfo[0].jobtitle}</p>
            </div>
           
          </div>
          <div className='resumeContacts'>
            <div className='userContacts'>
              <h2 style={{borderBottom:"2px solid black",padding:"10px",fontSize:"1.5rem"}}>Contacts</h2>
               <p className='userMobileNumber' style={{fontWeight:"500"}}>📞 : {resumeInfo[0].phonenumber}</p>
               <p className='userEmail' style={{fontWeight:"500"}}>✉️ : {resumeInfo[0].email}</p>
               <p className='userAddress'>📍 : {resumeInfo[0].city} , {resumeInfo[0].country}</p>

               
            </div>

            <div className="usereducationSection" style={{padding:"10px"}}>
              <h2 style={{borderBottom:"2px solid black",padding:"10px",fontSize:"1.5rem"}}>Education</h2>
                <div className='userEducation'>
                  <h3 className='usercollegeName' style={{fontSize:"1.5rem"}}>{resumeInfo[0].college}</h3>
                  <p className='userDegreeName'>{resumeInfo[0].degree}</p>
                </div>
            </div>


          </div>
        </div>
        <div className="rightSection">

          <div className="userSkills">
          <h2 style={{borderBottom:"2px solid black",padding:"10px",fontSize:"1.5rem"}}>Skills</h2>

          <div className='userSkillsList'>
            {
              resumeInfo[0].skills.map((skill,index)=>{
                return(
                  <div className='userSkill' key={index}>
              {skill}
            </div>
                )
              })
            }
            
          </div>
          </div>

          <div className="userExperienceSection">
          <h2 style={{borderBottom:"2px solid black",padding:"10px",fontSize:"1.5rem"}}>Experience</h2>
            <div className="userExperienceList">
              {
                resumeInfo[0].experience.map((exp,index)=>{
                  return(
                    <div className='userExperience' key={index}>
                    <h3 className='userJobName' style={{marginTop:"1rem",fontSize:"1.5rem",textAlign:"center"}}>{exp.jobname}</h3>
                    <div className='userDates'>
                      <p className='userJoiningDate'>{exp.joinAt} - {exp.leaveAt}</p>
                      
                    </div>
                    <h2 style={{marginTop:"1rem",fontSize:"1.5rem",textAlign:"center"}}>Job Description</h2>
                    <p className='jobDescription' style={{padding:"10px"}}>{exp.jobDescription}</p>
                 </div>
                  )
                })
              }
              </div>
               </div>
              <div className='personalSummary'>
              <h2 style={{borderBottom:"2px solid black",padding:"10px",fontSize:"1.5rem"}}>summary</h2>
              <p className='usersummary'>{resumeInfo[0].summary}</p>
              </div>

</div>
</div> 
}
      
     
                   
            </div></div>)

}

export default ResumeModel