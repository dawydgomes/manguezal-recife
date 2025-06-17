import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e4635', // Verde escuro - cor da vegetação do mangue
    },
    secondary: {
      main: '#8b5e3c', // Marrom-terroso - raízes e solo do manguezal
    },
    background: {
      default: '#f4f1ea', // Bege claro - fundo neutro
    },
    text: {
      primary: '#1b1b1b',
      secondary: '#4f4f4f',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
  },
})

export default theme
