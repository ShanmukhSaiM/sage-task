import { Checkbox, IconButton, Stack, Table, TableBody, TableHead, TableRow, Typography } from '@mui/material'
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import CropSquareRoundedIcon from '@mui/icons-material/CropSquareRounded';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

function TableComp() {

    const tableData = [
        {
            order: '15545',
            status: 'Successful',
            amount: '$12,00.00',
            rewards: '120',
            date: '14 Dec 2020, 8:43 pm'
        },
        {
            order: '15298',
            status: 'Successful',
            amount: '$79.00',
            rewards: '7',
            date: '1 Dec 2020, 10:12 pm'
        },
        {
            order: '15539',
            status: 'Successful',
            amount: '$5,500.00',
            rewards: '550',
            date: '12 Nov 2020, 2:01 pm'
        },
        {
            order: '14549',
            status: 'Pending',
            amount: '$880.00',
            rewards: '88',
            date: '21 Oct 2020, 5:54 pm'
        },
        {
            order: '15770',
            status: 'Successful',
            amount: '$7,650.00',
            rewards: '765',
            date: '19 Oct 2020, 7:32 am'
        },
    ]

  return (
    <Table size='small'  sx={{
        borderCollapse: 'separate',
        borderSpacing: '0px 10px',
        [`& .${tableCellClasses.root}`]: {
          borderBottom: "none"
        }
      }}>
        <TableHead>
          <TableRow sx={{textTransform: 'uppercase', bgcolor: '#312b39', mb: '1rem'}}>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem'}}>ID</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem', minWidth: '10rem'}}>Site</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem'}}>SKU</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem', minWidth: '10rem'}}>Profile</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem'}}>Proxy</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem', minWidth: '10rem'}}>Status</TableCell>
            <TableCell sx={{color: '#a1a5b7', fontWeight: '600', fontSize: '1rem'}}>Options</TableCell>
          </TableRow>
        </TableHead>
            <TableBody>
                {[...Array(10).keys()] .map((i) => (
                    <TableRow key={i} sx={{background: '#312b39', my: '1rem', color: '#dcd7e1', p: '0'}} >
                        <TableCell>
                            <Checkbox icon={<CropSquareRoundedIcon sx={{color: '#df8ad7'}} />} checkedIcon={<SquareRoundedIcon sx={{color: '#df8ad7'}} />} />
                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' sx={{color: '#dcd7e1'}}>Best Buy - PS5</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' sx={{color: '#dcd7e1'}}>B510W</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' sx={{color: '#dcd7e1'}}>proxyfailed</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' sx={{color: '#dcd7e1'}}>Sage Proxies</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' sx={{color: '#8adfac'}}>Success</Typography>
                        </TableCell>
                        <TableCell>
                            <Stack direction='row'>
                                {[<PlayCircleOutlineOutlinedIcon sx={{color: '#8adfac'}} />, <StopCircleOutlinedIcon sx={{color: '#dfae8a'}} />, <HighlightOffOutlinedIcon sx={{color: '#df8a99'}} />].map((e,i) => (
                                    <IconButton key={i}>
                                        {e}
                                    </IconButton>
                                ))}
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
  )
}

export default TableComp