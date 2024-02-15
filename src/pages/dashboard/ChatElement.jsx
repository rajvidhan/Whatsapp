import { faker } from '@faker-js/faker'
import { Avatar, Box } from '@mui/material'
import React from 'react'

const ChatElement = () => {
  return (
   <Box sx={{
    width:"100%",
    borderRadius:1,
    backgroundColor:'#fff',
    height:60
   }} p={2}>
    <Avatar src={faker} />
   </Box>
  )
}

export default ChatElement
