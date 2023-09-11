import { Button } from "@mui/material"
import React from "react"


const CusButton = ({ buttonType }) => {

  const btnVariand = {
    primary: {
      background: 'red',
      color: '#fff',
      ':hover': {
        background: 'green',
        color: '#fff',
      }
    },
    secondary: {
      background: 'yellow',
      color: '#fff',
      ':hover': {
        background: 'green',
        color: '#fff',
      }
    }
  }
  const data = btnVariand.primary
  return (
    <Button variant="outlined" startIcon={'$'} endIcon={'@'} sx={data}>save</Button>
  )
}

export default CusButton
