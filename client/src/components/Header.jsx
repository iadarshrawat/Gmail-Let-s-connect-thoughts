import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { GmailLogo } from '../constants/constants.js'
import { Tune, HelpOutline, Apps, Search, Menu, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const styleAppbar = styled(AppBar)({
  background: 'F5F5F5',
})

const SearchWrapper = styled(Box)({
  minWidth:690,
  marginLeft:80,
  maxwidth: 720, 
  height: 48, 
  backgroundColor: "#EAF1F8", 
  borderRadius: 40, 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'space-between', 
  padding: '0 20px'
})

const OptionWrapper = styled(Box)({
  width:'100%',
  display:'flex',
  alignItems:'center',
  justifyContent:'flex-end'
})


function Header() {
  return (
    <styleAppbar>
      <Toolbar>
        <Menu />
        <img src={GmailLogo} alt="" srcset="" width={120} style={{ marginLeft: 10 }} />
        <SearchWrapper>
          <Search />
          <InputBase fullWidth placeholder='Search Mail' id="fullWidth" style={{ margin: 5 }} />
          <Tune />
        </SearchWrapper>
        <OptionWrapper>
          <HelpOutline style={{margin:5}}/>
          <SettingsOutlined style={{margin:5}}/>
          <Apps style={{margin:5}}/>
          <AccountCircleOutlined style={{margin:5}}/>
        </OptionWrapper>
      </Toolbar>
    </styleAppbar>
  )
}

export default Header