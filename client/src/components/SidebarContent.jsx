import { Box, styled, List, ListItem } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button'
import {CreateOutlined} from '@mui/icons-material';
import { SIDEBAR_DATA } from '../config/sidebar.config';


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

function SidebarContent() {
  return (
    <Container>
        <Box></Box>
        <ComposeButton>
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
    </Container>
  )
}

export default SidebarContent