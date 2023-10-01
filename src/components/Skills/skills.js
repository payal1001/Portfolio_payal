import React from 'react'
import './skills.css';
import { Link } from 'react-scroll';

import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import UIDesign from '../../assets/ui-design.png';

const Skills = () => {
  return (
    <section Id='skills'>
      <span className='skillTitle'>What I do </span>
      <span className='skillDesc'>I am a Blockchain enthusiat with a kneen interest in learning more about ethereum and Bitcoin. However, I also do Web designing, with some experience.I am a proficient in HTML, CSS, Javascript, as well as design software such as Adobe photoshop and Adobe Illustrator</span>
      <div className='skillBars'>

        <div className='skillBar'>
<img src={UIDesign} alt='UIDesign' className='skillBarImg' />
<div className='skillBarText'> <h2> UI/UX Design </h2>
<p>this is something!</p></div>
        </div>

        <div className='skillBar'>
<img src={WebDesign} alt='WebDesign' className='skillBarImg' />
<div className='skillBarText'> <h2>website Design</h2>
<p>this is something!</p>
</div>
        </div>

        <div className='skillBar'>
<img src={AppDesign} alt='AppDesign' className='skillBarImg' />
<div className='skillBarText'> <h2>App Design</h2>
<p>this is something!</p>
</div>
        </div>

        <div className='skillBar'>
<img src='' alt='' className='skillBarImg' />
<div className='skillBarText'> <h2>Blockchain</h2>
<p>this is something!</p>
</div>
        </div>


      </div>
    </section>
  )
}

export default Skills;