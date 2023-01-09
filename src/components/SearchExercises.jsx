import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { HorizontalScrollbar } from './'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      )
      setBodyParts(['all', ...bodyPartsData])
    }

    fetchExercisesData()
  }, [])

  const handleSearch = async (e) => {
    if (e) e.preventDefault()
    if (search) {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      )
      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchedExercises)
      window.scrollTo({ top: 1600, behavior: 'smooth' })
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You
        <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <form onSubmit={handleSearch}>
          <TextField
            sx={{
              input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
              width: { lg: '800px', xs: '350px' },
              background: '#fff',
              borderRadius: '40px',
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className="search-btn"
            sx={{
              bgcolor: '#ff2625',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' },
              fontSize: { lg: '20px', sm: '14px' },
              height: '56px',
              position: 'absolute',
              right: 0,
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </form>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
