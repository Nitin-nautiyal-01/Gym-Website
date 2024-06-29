import React, { useState } from 'react'
import './Header.css'
import Logo from '../../Images/logo.png'
import bars from '../../Images/bars.png'
import { Link } from 'react-scroll'
export default function Header() {
  const mobile = window.innerHeight <= 768 ? true: false;
  const [menu,setMenu] = useState(false);
  return (
    <div className='header'>
        <img src={Logo} alt='Logo' className='logo' />
        {menu === false && mobile === true ? 
        (
          <div onClick = {() => setMenu(true)}>
            <img src={bars} style={{width :'1.5rem',height:'1.5rem'}}/>
            </div>
        )
      :
      (
      <ul className='menu'>
      <li ><Link
      onClick = {() => setMenu(false)}
      to = 'Home'
      span = {true}
      smooth = {true}
      >Home</Link></li>
      <li onClick = {() => setMenu(false)}><Link
      onClick = {() => setMenu(false)}
      to = 'programs'
      span = {true}
      smooth = {true}
      >Programs</Link></li>
      <li onClick = {() => setMenu(false)}><Link
      onClick = {() => setMenu(false)}
      to = 'Reasons'
      span = {true}
      smooth = {true}
      >Why us</Link></li>
      <li onClick = {() => setMenu(false)}><Link
      onClick = {() => setMenu(false)}
      to = 'Plans'
      span = {true}
      smooth = {true}
      >Plans</Link></li>
      <li ><Link
      onClick = {() => setMenu(false)}
      to = 'testimonials'
      span = {true}
      smooth = {true}
      > Testimonials</Link></li>
     </ul>
     )
     }

    </div>
  )
}
