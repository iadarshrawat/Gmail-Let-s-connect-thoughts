import { Close, DeleteOutline} from '@mui/icons-material'
import { Box, InputBase, TextField, Typography, styled, Button } from '@mui/material'
import React, { useState } from 'react'
import useApi from '../hooks/useApi'
import { API_URLS } from '../services/api.urls'

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

    const [data, setData] = useState({});

    const sentEmailService = useApi(API_URLS.saveSentEmails);


    const config = {
        Host : "smtp.elasticemail.com",
        Username : '00adarshrawat00@gmail.com',
        Password : '7E8B31DB7825B551A5AF4B20909D3CD542C9',
        Port:2525,
    }

    
    const onValueChange = (e)=>{
        setData({...data, [e.target.name] : e.target.value})
    }


    const sendMail = async (e)=>{
        
        e.preventDefault();

        if(window.Email) {
            window.Email.send({
                ...config,
                To : data.to,
                From : "00adarshrawat00@gmail.com",
                Subject : data.subject,
                Body : data.body,
            }).then(
              message => alert(message)
            );
        }

        const payload = {
            to : data.to,
            from : "00adarshrawat00@gmail.com",
            subject : data.subject,
            body : data.body,
            date: new Date(),
            image: '',
            name: 'Adarsh',
            starred: false,
            type: 'sent'
        }
        
        console.log(payload)
        
        sentEmailService.call(payload);

        if(!sentEmailService.error) {
            handleClose();
            setData({})
        } else {
              
        }
    }


    const closeComposeMail = (e)=>{
        e.preventDefault();
        handleClose();
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
            <InputBase variant="standard" placeholder='To' name='to' onChange={(e)=>onValueChange(e)}/>
            <InputBase placeholder='Subject' name='subject' onChange={(e)=>onValueChange(e)}/>
            <TextField multiline rows={30} name='body' onChange={(e)=>onValueChange(e)} sx={{'& .MuiOutlinedInput-notchedOutline': {border:'none'}}} />
        </RecipientWrapper>
        <Footer>
            <SendButton onClick={sendMail}>Send</SendButton>
            <DeleteOutline onClick={deleteMail}/>
        </Footer>
    </Box>
  )
} 

export default ComposeMail