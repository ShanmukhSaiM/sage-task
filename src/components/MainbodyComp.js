import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import TableComp from './TableComp';

function MainbodyComp() {
    const data1 = [1, 2, 3, 4, 5, 6, 7]
    const data2 = [8, 9, 10, 11, 12, 13, 14]
    const count = [data1, data2]
  return (
    <Stack sx={{background: '#2d2734', height: '100vh', p: '1rem 2rem', width: '100%'}} gap={3}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', color: '#847f8a', alignItems: 'center'}} gap={2}>
            <IconButton>
                <MinimizeIcon sx={{color: '#847f8a', mt: '-0.8rem'}} />
            </IconButton>
            <IconButton>
                <CloseIcon sx={{color: '#847f8a'}} />
            </IconButton>
        </Box>
        <Stack direction='row' justifyContent='space-between' sx={{color: '#d9d4de'}}>
            <Typography variant='h5' fontWeight={600}>Proxy Group 1</Typography>
            <Typography fontWeight={600}>12:00:00</Typography>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
            <Stack direction='row' gap={2}>
                {[['Create New', '#8a92df'], ['Start All', '#8adfac'], ['Stop All', '#dfae8a'], ['Clear All', '#df8a99'], ['Go Back', '#c48adf']].map( e => (
                    <Button size='large' sx={{background: e[1], textTransform: 'none', color: '#fff', p: '0.3rem 2.5rem', borderRadius: '5px'}}>{e[0]}</Button>
                ))}
            </Stack>
            <Button size='large' sx={{background: '#df8ad7', textTransform: 'none', color: '#fff', p: '0.3rem 2.5rem', borderRadius: '5px'}}>Captcha</Button>
        </Stack>
        
        <TableComp />
    </Stack>
  )
}

export default MainbodyComp