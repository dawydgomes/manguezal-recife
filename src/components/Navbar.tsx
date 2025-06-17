import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2e4635' }}>
      <Toolbar>
        <Box
          component="img"
          src="/logo-manguezal.png"
          alt="Logo Manguezal"
          sx={{ height: 40, mr: 2 }}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Manguezal Recife
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">Home</Button>
        <Button color="inherit" component={RouterLink} to="/mapa">Mapa</Button>
        <Button color="inherit" component={RouterLink} to="/sobre">Sobre</Button>
      </Toolbar>
    </AppBar>
  )
}
