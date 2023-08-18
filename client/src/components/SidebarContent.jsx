import { Box, styled, List, ListItem } from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button'
import {CreateOutlined} from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';
import Dialog from '@mui/material/Dialog';
import ComposeMail from './ComposeMail';

const ComposeButton = styled(Button)({
    background:'#c2e7ff',
    borderRadius:16,
    padding:'17px 22px',
    color:'black',
    textTransform:'none',
    '& > svg':{
        marginRight:15
    }
})

const Container = styled(Box)({
    padding:8,
    '& > ul':{
        padding:'10px 0 0 5px',
        fontSize:'14px',
        fontWeight:500,
        cursor:'pointer'
    }
})

const dialogStyle = {
    height: '90%',
    width:'80%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    borderRadius:'10px 10px 0 0'
}

function SidebarContent() {

    const [open, setOpen] = useState(false);


    const handleClose = ()=> {setOpen(false)} 

  return (
    <Container>
        <Box></Box>
        <ComposeButton onClick={()=>{setOpen(true)}}>
            <CreateOutlined/>
            Compose
        </ComposeButton>
        <List>
            {
                SIDEBAR_DATA.map((data)=>(
                    <ListItem>
                        <data.photo fontSize='small' style={{marginRight:15}}/>{data.title}
                    </ListItem>
                ))
            }
        </List>

            <Dialog open={open} onClose={handleClose} PaperProps={{sx : dialogStyle}}>
                <ComposeMail handleClose={handleClose} />
            </Dialog>

    </Container>
  )
}

export default SidebarContent