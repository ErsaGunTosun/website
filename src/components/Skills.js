import React from 'react'

function Skills(props) {
  return (
    <div className='row'>
        {props.skills.map(skill=>{
            return(
                <p className='col-4'>{skill}</p>
            )
        })}

    </div>
  )
}

export default Skills