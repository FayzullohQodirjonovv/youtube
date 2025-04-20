import React from 'react';
import More from '../../assets/more.svg'
import Qongiroq from '../../assets/qongiroq.svg'
import Vidyo from '../../assets/vidyo.svg'
import Man from '../../assets/man.jpg'
import Mikrafon from '../../assets/mikrafon.svg'

function App() {
  return (
    <div className="main-content">
      <div className="search-bar">
        <input className='inputlern' type="text" placeholder="Search" />
        <button className="search-button">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.793 15.207L20 20M18.5 11C18.5 15.142 15.142 18.5 11 18.5C6.858 18.5 3.5 15.142 3.5 11C3.5 6.858 6.858 3.5 11 3.5C15.142 3.5 18.5 6.858 18.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <img className='ml-[20px]' src={Mikrafon} alt="" />
      </div>
      <div className='flex gap-3'>
          <img src={Vidyo}  width={35} height={35} alt="" />
          <img src={More}  width={35} height={35} alt="" />
          <img src={Qongiroq}  width={35} height={35} alt="" />
          <img className='rounded-full' src={Man}  width={35} height={35} alt="" />
        </div>
    </div>

  );
}

export default App;