import { Box } from "@mui/material"
import Feature from "../components/Feature"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Process from "../components/Process"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Box>
        <Navigation/>
        <Hero/>
        <Feature/>
        <Process/>
        <Footer/>
    </Box>
  )
}

export default Home