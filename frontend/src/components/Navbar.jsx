import { AppBar, Container, Toolbar, Typography } from '@mui/material'

const Navbar = () => {

  return (
    <AppBar position='sticky' sx={{top:0, marginLeft: -1, marginTop: -1, width: 1920, bgcolor:"black"}} >
      <Container maxWidth="x1" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="http://localhost:5173/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}

          >
            hello
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
