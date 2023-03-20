import React from 'react'

import Navbar from '../../components/Navbar';
import Projects from '../../components/Projects';
import Skills from '../../components/Skills';
import Socials from '../../components/Socials';

//Css
import './style.css';

function Details() {
  const [theme, setTheme] = React.useState('dark');
  const socials = [
    {
      link: "https://github.com/ErsaGunTosun",
      name:"github"
    },
    {
      link: "https://www.linkedin.com/in/fatihetosun/",
      name:"linkedin"
    },
    {
      link: "/",
      name:"medium"
    },
    {
      link: "/",
      name:"twitter"
    },
    {
      link: "https://discord.gg/Gqu4nJedgU",
      name:"discord"
    },
    {
      link: "/",
      name:"Fiverr"
    },
  ];

  const skills = ["HTMl", "CSS", "Javascript", "Python", "C++", "Boostrap", "React", "OpenCV"];

  // Chanage Theme Func
  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  // Theme Check
  React.useEffect(() => {
    if (localStorage.getItem('theme') === null || localStorage.getItem('theme') === '') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }
  }, [])

  return (
    <div className={`${theme === 'dark' ? 'dark-body' : 'light-body'}`}>
      <div className="container h-100 align-items-center justify-content-center">

        {/* Navbar Component */}
        <Navbar theme={theme} changeTheme={handleChangeTheme} fixed={false} />

        <div className="row h-100 align-item-center d-flex justify-content-center ">
          <div className='h-100'>

            {/* About div */}
            <div className='row text-light col-12'>
              <div className='col-md-4 col-12 text-start mx-1'>
                <p className='h3 header'>About</p>
              </div>
              <div className='col-md-12 col-12 px-md-5 text-start'>
                <div className={`mt-md-4 h5 px-md-4 px-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>
                  <p>I’m Ersagun Tosun,I`m a computer engineering student at Turkey in the same time junior developer</p>
                  <p>I’m actively developing projects as a backend developer. In my spare time, I’m trying to improve myself in the field of electronics and mechanics.</p>
                </div>
              </div>
            </div>


            {/* Language div */}
            <div className='row text-light col-12'>
              <div className='col-12 text-start mx-1'>
                <p className='h3 header'>Language & Framework & Libraries</p>
              </div>
              <div className=' col-12 px-md-5 text-start'>
                <div className={`row mt-md-4 h5 px-md-4 px-3 ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>

                  {/* Skill Component */}
                  <Skills skills={skills} />

                </div>
              </div>
            </div>


            {/* Contact div */}
            <div className='row text-light col-12 d-flex justify-content-center'>
              <div className='col-md-12 col-12 text-start mx-1'>
                <p className='h3 header'>Contact</p>
              </div>
              <div className='col-md-8 col-12 px-md-5 text-center'>
                <div className={`row mt-md-4 h5 px-md-4 px-3 justify-content-center ${theme === 'dark' ? 'social-link-light' : 'social-link-light'}`}>

                  {/* Social Components*/}
                  <Socials theme={theme} socials={socials} />
              
                </div>
              </div>
            </div>

            {/* Project div */}
            <div className='row text-light col-12'>
              <div className='col-md-4 col-12 text-start mx-1'>
                <p className='h3 header'>Projects</p>
              </div>
              <div className='col-md-12 col-12 px-md-5 text-start'>
                <div className={`mt-md-4 h5 px-md-4 px-3`}>

                  {/* Projects Component */}
                  <Projects theme={theme} />

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Details