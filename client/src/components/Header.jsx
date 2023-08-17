import React from 'react'
import { AppBar, Toolbar, styled, InputBase, Box } from '@mui/material';
import { GmailLogo } from '../constants/constants.js'
import { Tune, HelpOutline, Apps, Search, Menu, SettingsOutlined, AccountCircleOutlined } from '@mui/icons-material';

const StyleAppbar = styled(AppBar)({
  background:'#F5F5F5',
  boxShadow:'none'
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
  justifyContent:'flex-end',
  '& > svg': {
    marginLeft:15,
    fontSize:25,
    color:'#615757'
  }
})


function Header({toggleDrawer}) {
  return (
    <StyleAppbar>
      <Toolbar>
        <Menu color='action' onClick={toggleDrawer} />
        <img src={GmailLogo} alt="" srcset="" width={120} style={{ marginLeft: 10 }} />
        <SearchWrapper>
          <Search color='action'/>
          <InputBase fullWidth placeholder='Search Mail' id="fullWidth" style={{ margin: 5 }} />
          <Tune color='action'/>
        </SearchWrapper>
        <OptionWrapper>
          <HelpOutline/>
          <SettingsOutlined/>
          <Apps/>
          <AccountCircleOutlined/>
        </OptionWrapper>
      </Toolbar>
    </StyleAppbar>
  )
}

export default Header