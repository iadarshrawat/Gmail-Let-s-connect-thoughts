import React, { useState } from 'react'
import { Drawer, styled } from '@mui/material'
import SidebarContent from './SidebarContent'

function SideBar({sideOpen}) {

  return (
    <Drawer anchor='left'  open={sideOpen} hideBackdrop={true} ModalProps={{keepMounted:true}} variant='persistent'
        sx={{
            '& .MuiDrawer-paper': {
                marginTop: '64px',
                width:'250px',
                background:'#F5F5F5',
                borderRight:'none',
                height: 'calc(100vh-64px)'
            }
        }}
    >
        <SidebarContent/>
    </Drawer>
  )
}

export default SideBar