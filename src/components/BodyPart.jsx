import React from 'react'
import { Stack, Typography } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item && '4px solid #ff2625',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '60px',
        cursor: 'pointer',
        gap: '47px',
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1600, left: 100, behavior: 'smooth' })
      }}
    >
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <FitnessCenterIcon
          style={{
            color: '#ff26256e',
            marginRight: '10px',
            border: '1px solid #ffe389',
            borderRadius: 50,
            fontSize: 30,
            padding: 3,
          }}
        />
        {item}
      </Typography>
    </Stack>
  )
}

export default BodyPart
