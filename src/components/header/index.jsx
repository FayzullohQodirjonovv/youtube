import React from 'react';
import Menu from '../../assets/menu.svg'
import Menu from '../../assets/menu.svg'
import youtubeLogo from '../../assets/youtube.svg';
import Home from '../../assets/home.svg'
import Qibla from '../../assets/qibla.svg'
import Shorts from '../../assets/shorts.svg'
import Viydolar from '../../assets/viydolar.svg'
import Montaj from '../../assets/montaj.svg'
import History from '../../assets/history.svg'
import V from '../../assets/v.svg'
import Soat from '../../assets/soat.svg'
import Liked from '../../assets/liked.svg'
import Select from '../../assets/select.svg'
import Nodir from '../../assets/nodir.svg'
import Nodir2 from '../../assets/nodir2.svg'
import Nodir3 from '../../assets/nodir3.svg'
import Nodir4 from '../../assets/nodir4.svg'
import Nodir5 from '../../assets/nodir5.svg'
import Nodir6 from '../../assets/nodir6.svg'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="sidebar">
      <div className='logki flex gap-5 w-[90%] m-auto'>
        <img src={Menu} alt="menu" />
        <img src={youtubeLogo} alt="youtube" />
      </div>
      <ul>
        <li className='flex'><img src={Home} alt="" /> <Link to="/">Home</Link></li>
        <li className='flex'><img src={Qibla} alt="" /><Link to="/explores">Explore</Link></li>
        <li className='flex'><img src={Shorts} alt="" /> <Link to="/shorts">Shorts</Link></li>
        <li className='flex'><img src={Viydolar} alt="" /><Link to="substriction">Subscriptions </Link></li>
      </ul>
      <hr className='text-[#383838] w-[200px]'/>
      <ul>
        <li className='flex'><img src={Montaj} alt="" /> Library</li>
        <li className='flex'><img src={History} alt="" /> History</li>
        <li className='flex'><img src={V} alt="" /> Your videos</li>
        <li className='flex'><img src={Soat} alt="" /> Watch later</li>
        <li className='flex'><img src={Liked} alt="" /> Liked videos</li>
        <li className='flex'><img src={Select} alt="" />Show more</li>
      </ul>
      <hr className='text-[#383838] w-[200px]'/>
      <ul>
        <h2 className='text-[#AAAAAA] p-3'>SUBSCRIPTIONS</h2>
        <li className='flex items-center'><img src={Nodir} alt="" />Nadir On The Go<p className='text-[#3DA6FF] text-[20px] items-center'>.</p></li>
        <li className='flex items-center'><img src={Nodir2} alt="" />Coke Studio Bangla</li>
        <li className='flex items-center'><img src={Nodir3} alt="" />MKBHD <p className='text-[#3DA6FF] text-[20px] items-center'>.</p></li>
        <li className='flex items-center'><img src={Nodir4} alt="" />Figma<p className='text-[#3DA6FF] text-[20px] items-center'>.</p></li>
        <li className='flex items-center'><img src={Nodir5} alt="" />ATC Android ToTo C...</li>
        <li className='flex items-center'><img src={Nodir6} alt="" />Alux.com<p className='text-[#3DA6FF] text-[20px] items-center'>.</p></li>
      </ul>
    </div>
  );
}

export default Header;
