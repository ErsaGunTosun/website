import React from 'react'

function Socials(props) {
  return (
    <div className='row d-flex justify-content-center'>
        {props.socials.map(social=>{
            return(
                <a href={social.link} className={`col-2 mb-3  ${props.theme === 'dark' ? 'social-link-dark' : 'social-link-light'}`}  >
                      <p className='mb-0 fs-3'> <i className={`fa-brands fa-${social.name}`}></i> </p>
                </a>
            )
        })
        }


    </div>
    

  )
}

export default Socials