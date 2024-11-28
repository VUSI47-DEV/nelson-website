import { Box } from '@mui/material'
import React from 'react'

const Process = () => {
  return (
    <React.Fragment className ="h-screen process-component">
        <Box 
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'2rem',
                flexDirection:'column',
                textAlign:'center',
                marginTop:'100px'
            }}
        >
            <Box>
                <h1 className='text-center font-bold text-5xl w-full mb-10' >
                    Advising Through Understanding
                </h1>
                <p className='font-medium text-lg mx-auto process-p'>
                    Our advice process has been customized to the needs of graduate profesional,
                    and tailored specifically to the individual needs of our members.
                </p>
            </Box>
            <Box className="text-center">
                <img 
                    src="../../public/assets/pps-process.png" 
                    alt="process-image" 
                    width={'70%'}
                    className='mx-auto'
                />
            </Box>
        </Box>
    </React.Fragment>
  )
}

export default Process