import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="logo" height="45px" />
        <Typography>All Right Reserved &copy; mojtaba.tech</Typography>
      </Stack>
    </Box>
  )
}

export default Footer
