import { Close, DeleteOutline} from '@mui/icons-material'
import { Box, InputBase, TextField, Typography, styled, Button } from '@mui/material'
import React, { useState } from 'react'

const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:10,
    background:'#f2f6fc'
})

const RecipientWrapper = styled(Box)({
    display:'flex',
    flexDirection:'column',
    margin:'0 15px',
    '& > div':{
        fontSize:14,
        borderBottom: '2px solid #F5F5F5',
        marginTop:10,
    }
})

const Footer = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding:'10px 15px'
    
})

const SendButton = styled(Button)({
    background:'#0B57D0',
    color:'#fff',
    borderRadius:40,
    padding:'7px 30px',
    fontWeight:500,
    textTransform:'none'
})


function ComposeMail({handleClose}) {

    const config = {
        Host : "smtp.elasticemail.com",
        Username : '00adarshrawat00@gmail.com',
        Password : '7E8B31DB7825B551A5AF4B20909D3CD542C9',
        Port:2525,
    }

    const [to, setTo] = useState();
    const [message, setMessage] = useState();
    const [subject, setSubject] = useState();

    const closeComposeMail = (e)=>{
        e.preventDefault();
        handleClose();
    }

    const sendMail = (e)=>{
        
        e.preventDefault();

        if(window.Email) {
            window.Email.send({
                ...config,
                To : 'talkwithadarsh@gmail.com',
                From : "00adarshrawat00@gmail.com",
                Subject : "This is the subject",
                Body : "And this is the body"
            }).then(
              message => {
                alert(message);
            }
            );
            handleClose();
        }
    }
    const deleteMail = (e)=>{
        e.preventDefault();
        handleClose();
    }

  return (
    <Box>
        <Header>
            <Typography>New Message</Typography>
            <Close fontSize='small' onClick={closeComposeMail}/>            
        </Header>
        <RecipientWrapper>
            <InputBase variant="standard" placeholder='To' name='to' onChange={(e)=>{setTo(...to, e.target.value)}}/>
            <InputBase placeholder='Subject' onChange={(e)=>{setSubject(...subject, e.target.value)}}/>
            <TextField multiline rows={30} onChange={(e)=>{setMessage(...message, e.target.value)}} sx={{'& .MuiOutlinedInput-notchedOutline': {border:'none'}}} />
        </RecipientWrapper>
        <Footer>
            <SendButton onClick={(e)=>sendMail(e)}>Send</SendButton>
            <DeleteOutline onClick={deleteMail}/>
        </Footer>
    </Box>
  )
} 

export default ComposeMail