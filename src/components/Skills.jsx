import React from 'react'
import { useState } from 'react'
import { Input,Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { addSkill, removeSkill } from '../redux/skillToRb'

const Skills = () => {
  const dispatch = useDispatch()
  const skills = useSelector(state=>state.skillslice.skillState)
/*     const [skills, setSkills ] = useState([]) */
    const [showskillinput, setshowskillinput] = useState(false)
    function handleClick()
    {
        console.log(showskillinput)
       setshowskillinput(!showskillinput)
    }
    function createSkill(skillname)
    {
          /* setSkills([skillname,...skills]) */
          dispatch(addSkill(skillname))
          setshowskillinput(!setshowskillinput)
    }
    function deleteSkill(index)
    {
      dispatch(removeSkill(index))
    }
  return (
    <div className='skills' style={{marginTop:"2rem"}}>
         <h3 style={{fontSize:"2rem",textDecoration:"underline",marginBottom:"1rem"}}>Skills</h3>

         
         <div className='skillSection' style={{marginBottom:"1rem"}}>
            {
                skills && skills.map((skill,index)=>{
                    return(
                        <div className='skill' style={{display:"flex",justifyContent:"space-between",padding:"10px"}} key={index}>
                              <h3>{skill}</h3>
                               <Button onClick={()=>deleteSkill(index)}>Delete</Button>
                        </div>
                    )
                })
            }
        { showskillinput && <div className='skillInput'>
          <label style={{marginRight:"1rem"}}>Skill name</label>
          <Input size='md' border="2px solid black" width="30rem" onKeyUp={(e)=>{if(e.key=="Enter"){createSkill(e.target.value); e.target.value=""} }}/>
        </div>
          }
      </div>
         
         
        
    
        <Button colorScheme='gray' onClick={handleClick}>Add Skill</Button>
       
    </div>
  )
}

export default Skills