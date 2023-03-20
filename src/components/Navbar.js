import React from 'react'

export default function Navbar(props) {

  return (
    <>
        <nav class={`navbar bg-body-tertiary ${props.fixed ?"fixed-top":" "}`}>
            <div class="container-fluid justify-content-center mt-4">
                <div>
                      <a href="/" className={`fs-5 fw-bold nav-item ${props.theme === 'dark' ? 'nav-lght-link' : 'nav-dark-link'}`}>./home</a>
                      <a href="/details" className={`fs-5 fw-bold nav-item ${props.theme === 'dark' ? 'nav-lght-link' : 'nav-dark-link'} ms-2`}>./details</a>
                      <i onClick={props.changeTheme} className={`fa-solid fs-5 ms-2 nav-item theme-btn ${props.theme === 'dark' ? 'fa-sun nav-lght-link ' : 'fa-moon nav-dark-link'}`}></i>    
                </div>
            </div>
        </nav>
    </>
  )
}
