import React from 'react'
import "../styles/Header.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OpenWithOutlinedIcon from '@mui/icons-material/OpenWithOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CoronavirusTwoToneIcon from '@mui/icons-material/CoronavirusTwoTone';
function Header() {
  return (
    <div className='navbar-menu'>
        <div className='navbar-menu__section'>
              <div className='navbar-menu__left'>
                  <div className='navbar-menu__menu'>CyHealth</div>
                  <div className='navbar-menu__menu'>COVID-19</div>
                  <div className='navbar-menu__menu'>Log Out</div>
                  <div className='navbar-menu__menu'>|</div>
                  <div className='navbar-menu__menu__icons'>
                    <OpenWithOutlinedIcon fontSize = "small" />
                    <SettingsOutlinedIcon fontSize = "small" />
                    <HelpOutlineOutlinedIcon fontSize = "small"/>
                    </div>
              </div>
              <div className='navbar-menu__right'>
              <CoronavirusTwoToneIcon style={{color: "red", fontSize:"40px"}}/>
                    <h1>CyHealth</h1>
              </div>

        </div>  
    </div>
  )
}

export default Header