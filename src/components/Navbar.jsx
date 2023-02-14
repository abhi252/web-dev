import React from 'react'
import {AppBar,Toolbar,Box,Typography,styled} from '@mui/material'
import Link from 'next/link';

const Header = styled(AppBar)`
    background: #000;
`
const Nav = styled(Box)`
    display:flex;
    margin-left:auto;
    margin-right:5%;
    & > a {
        margin-right:100px;
        cursor:pointer;
    }
`
const Navbar = () => {

  const logo ='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wikipedia-logo-white.svg/2560px-Wikipedia-logo-white.svg.png';
  return (
    <Header position='static'>
        <Toolbar>
            <img src={logo} alt='Logo' style={{height:20}} />
            <Nav>
                <Link href='/'><Typography>Home</Typography></Link>
                <Link href='/about'><Typography>About</Typography></Link>
                <Link href='/contact'><Typography>Contact</Typography></Link>
            </Nav>
        </Toolbar>
    </Header>
  )
}

export default Navbar
