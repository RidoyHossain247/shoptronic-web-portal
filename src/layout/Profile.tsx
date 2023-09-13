import { Badge, IconButton, Stack } from '@mui/material'
import React from 'react'

interface ProfileProps {
  icon: any
  badgeContent: number
}


const Profile: React.FC<ProfileProps> = ({ icon, badgeContent }): JSX.Element => {




  return (
    <Stack direction="row" spacing={2}>
      <Badge sx={{
        '.MuiBadge-badge': {
          top: '7px'
        }
      }} badgeContent={badgeContent} color="primary">
        <IconButton >{icon}</IconButton>
      </Badge>
    </Stack>
  )
}

export default Profile
