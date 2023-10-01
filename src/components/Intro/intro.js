import React from 'react'
import './intro.css' 
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';



const Intro = () => {
  return (
    <div>
      <section Id='intro'>
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className="introText">I'm, <br/><span className='introName'>Payal Prajapati</span><br/>Blockchain Developer</span>
            <p className="introPara">I'm a Sophomore at IIT dhanbad and am pursuing B. Tech in Civil Engineering. I'm a skilled Blockchain and website developer with experience in creating visually appealing and user friendly websites.</p>
<Link> <button className="btn"> <img src={btnImg} alt="" className="btnImg" /> Hire Me </button> </Link>
        </div>
      
      </section>
    </div>
  )
}

export default Intro;
