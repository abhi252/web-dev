import React from 'react'
import {Box, Typography, styled} from '@mui/material'

const FooterSection = styled(Box)`
    background:#ccc;
    padding:5px
`

const Footer = () => {
  return (
    <FooterSection>
      <Typography>Code for interview 2022</Typography>
    </FooterSection>
  )
}

export default Footer
