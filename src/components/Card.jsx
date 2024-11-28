import React from 'react';
import { Button, CardActions, CardContent, Typography } from "@mui/material"

const Card = ({desc,title}) => {
  return (
    
    <React.Fragment>
        <CardContent>
            <img src="../../public/assets/31079204_kerfin7_nea_2796.png" width={"30%"} alt="risk-icon" />
            <h1 className='font-bold text-lg w-full'>{title}</h1>
            <Typography variant="body2" color={"text.secondary"} width={"90%"}>
                {desc}
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" >Learn More</Button>
        </CardActions>
    </React.Fragment>
  )
}

export default Card