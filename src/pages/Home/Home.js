import React from 'react'

import Navbar from '../../components/Navbar';

//Css
import './style.css';

function Home() {
  const [name, setName] = React.useState('ErsaGun');
  const [theme, setTheme] = React.useState('dark');

  const handleChangeTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const dyncText = () => {
    let dync_txt = document.querySelector('.dync-txt')
    let dync_txt_content = ['Developer.', 'Student.', 'Turkish.', 'Human.'];
    dync_txt.textContent = dync_txt_content[Math.floor(Math.random() * dync_txt_content.length)];
  }

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

    // 
    function getRandomLetter() {
      var alphabet = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",]
      return alphabet[Math.floor(Math.random() * (alphabet.length))]
    }
    function getRandomWord(word) {
      var text = word

      var finalWord = ''
      for (var i = 0; i < text.length; i++) {
        finalWord += text[i] === ' ' ? ' ' : getRandomLetter()
      }

      return finalWord
    }
    let interv = 'undefined'
    let canChange = false
    let globalCount = 0
    let count = 0
    let INITIAL_WORD = name;
    let isGoing = false

    function init() {
      if (isGoing) return;

      isGoing = true
      let randomWord = getRandomWord(name)
      setName(randomWord)

      interv = setInterval(function () {
        let finalWord = ''
        for (let x = 0; x < INITIAL_WORD.length; x++) {
          if (x <= count && canChange) {
            finalWord += INITIAL_WORD[x]
          } else {
            finalWord += getRandomLetter()
          }
        }
        setName(finalWord)
        if (canChange) {
          count++
        }
        if (globalCount >= 20) {
          canChange = true
        }
        if (count >= INITIAL_WORD.length) {
          clearInterval(interv)
          count = 0
          canChange = false
          globalCount = 0
          isGoing = false
        }
        globalCount++
      }, 100)
    }
    init();
  }, [])

  return (
    <div className={`w-100 h-100 ${theme === 'dark' ? 'dark-body' : 'light-body'}`} >
       <Navbar theme={theme} changeTheme={handleChangeTheme} fixed={true}/>
      <div className="container-fluid h-100">
        <div className="row h-100 d-flex justify-content-center ">
          <div className="col-12">
            <div className="container h-100  d-flex justify-content-center align-items-center">

              <div className="row d-flex justify-content-center left-side w-100">
                <div className="col-md-6 d-flex justify-content-center align-self-center">
                  <div>
                    <p className={`fs-1 left-side-txt ${theme === 'dark' ? 'txt-lght' : 'txt-dark'}`}>Hi, I'm {name}.</p>
                    <p className={`fs-3 text-md-start text-center left-side-txt ${theme === 'dark' ? 'txt-lght' : 'txt-dark'}`}>
                      A <span onClick={dyncText} className="dync-txt disable-select">Developer.</span>
                    </p>
                    <a href="mailto:fatihetosun+s@gmail.com" className={`${theme === 'dark' ? 'cnt-lght-btn' : 'cnt-dark-btn'} btn`}>./contact.sh</a>
                  </div>
                </div>
                <div className="col-md-6 d-flex mt-5 justify-content-center align-self-center">
                  <img src="images/pp.jpg" alt="" className={`rounded img-fluid  ${theme === 'dark' ? 'logo-dark' : 'logo-light'}`} />
                </div>
                {/* <div className="col-md-6 d-md-none d-sm-flex justify-content-center align-self-start">
                  <img src="images/pp.jpg" alt="" className={`rounded img-fluid  ${theme === 'dark' ? 'logo-dark' : 'logo-light'}`} />
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home