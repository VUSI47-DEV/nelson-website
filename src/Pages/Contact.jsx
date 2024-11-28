import { Box } from "@mui/material"
import Navigation from "../components/Navigation"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <>
      <Navigation/>
      <Box sx={{}}>
          {/* <Box>
            <img src="/public/assets/contact-image.png" alt="contact-image" width={'50%'}/>
          </Box> */}
          <h1>Contact Me</h1>
          <h5>Lets get in touch</h5>
          <ContactForm/>
      </Box>
    </>
  )
}

export default Contact