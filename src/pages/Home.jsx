import React, { useState } from 'react'
import { Box } from '@mui/material'
import { Exercises, HeroBanner, SearchExercises } from '../components'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
