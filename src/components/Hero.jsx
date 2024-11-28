import { Box, Button, Grid } from "@mui/material"

const Hero = () => {

  return (
    <>
        <Box className="my-20 h-screen">
            <Grid 
                container 
                spacing = {2} 
                className="flex align-center px-10 mt-5"
                alignItems={"center"}
            
            >
                <Grid item xs = {6}>
                    <h1 className="font-bold text-4xl hero-txt" width={'100%'}>
                    FINANCIAL SECURITY STARTS HERE
                    STEFAN BOTHMA, INDEPENDENT FINANCIAL PLANNING FOR PROFESSIONALS
                    </h1>
                    <p className="text-lg text-gray-500 my-10 "  width={'100%'}>
                    We ca wait to help you on your journey to secure your financial well-being. It starts with a conversation.
                    Complete the form belo ll contact you. 
                    </p>
                    <Button
                        href="https://l.wl.co/l?u=https%3A%2F%2Fcalendly.com%2Fnelsonkhutswa%2Fpps-introductory-call"
                        variant="contained" 
                        sx={{
                            
                        }}

                    >
                        Book Appointment
                    </Button>
                </Grid>
                <Grid item xs = {6}>
                    <img width={'100%'} src="/public/assets/image-1.png" alt="hero-image"/>
                </Grid>
            </Grid>
        </Box>
    </>
  )
}

export default Hero