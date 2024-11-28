import { Box, Button } from "@mui/material"
import { Link } from "react-router-dom"


const Navigation = () => {
  return (
    <Box className=" bg-white px-10 h-4 w-full">
        <nav className="flex flex-no-wrap justify-between bg-white top-0 z-10 w-full items-center">
          <div>
            <div className="">
              <img src="../../public/assets/Nelson__1_-removebg-preview.png" alt="logo" width={'150px'} />
            </div>
          </div>
          <ul className="flex gap-10">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>
                Features
              </Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
          <Button variant="contained" href="https://l.wl.co/l?u=https%3A%2F%2Fcalendly.com%2Fnelsonkhutswa%2Fpps-introductory-call">Book Appointment</Button>
        </nav>
    </Box>
  )
}

export default Navigation