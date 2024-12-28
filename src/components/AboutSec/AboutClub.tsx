import { Stack, Typography} from '@mui/material'
import React from 'react'

const AboutClub = () => {
  return (
    <Stack sx={{paddingInline: { xs: '2rem', sm: '4rem', md: '6rem' } ,marginBottom: { xs: '1.75rem', sm: '2.25rem', md: '3.25rem' },marginTop: { xs: '1rem', sm: '1.25rem', md: '2rem' }, backgroundColor: '#1E1E1E'}}>
      <Stack>
      <Typography variant='h3' sx={{fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' } , fontFamily: 'Poppins' , fontWeight: 600 , paddingBlock: '1.5rem'}} align='center'>Clubs and Societies</Typography>
      </Stack>
      <Stack>
      <Typography variant='body1' sx={{fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' }, fontFamily: 'Poppins' , fontWeight: 600, color: '#BDBDBD' , paddingBlock: '0.75rem'}} align='center'>VSSUT, Burla, offers a vibrant campus life with a wide range of clubs and societies catering to both technical and non-technical interests. Technical clubs like ENIGMA (the official web and coding club), Robotics Club, ASME VSSUT, IEEE VSSUT Student branch and IIC Club focus on innovation, coding, robotics, automotive engineering, and space science. On the non-technical side, clubs like the Literary Society, Dramatics Club, Music Club, and Photography Club foster creativity, communication, and artistic expression. The Entrepreneurship Cell (E-Cell) encourages business ideas and start-up ventures.</Typography>
      </Stack>
      <Stack>
      <Typography variant='body1' sx={{fontSize: { xs: '0.7rem', sm: '0.9rem', md: '1rem' } , fontFamily: 'Poppins' , fontWeight: 600 , color: '#BDBDBD', paddingBlock: '0.75rem'}} align='center'>Joining These clubs and societies offers students the chance to develop skills beyond the classroom and grow both personally and professionally. Technical clubs provide hands-on experience in coding, engineering, and innovation, preparing members for competitive programming and industry challenges. Non-technical clubs  nurture creativity, communication, and confidence, while E-Cell fosters entrepreneurial spirit. These clubs also offer opportunities for networking, leadership, and teamwork, making them a vital part of the university experience for holistic growth.</Typography>
      </Stack>
      </Stack>
  )
}

export default AboutClub
