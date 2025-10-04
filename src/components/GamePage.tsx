import { Container, Typography, Box } from '@mui/material'
import { Game } from './game/Game'

/**
 * @function GamePage
 * @description Página que serve como contêiner para o jogo "Caranguejo Run".
 * Apresenta o título, instruções e renderiza o componente principal do jogo.
 * @returns {JSX.Element} O componente da página do jogo.
 */
export const GamePage = () => {
  return (
    <Container
      sx={{
        py: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        🦀 Caranguejo Run!
      </Typography>
      <Typography paragraph>
        Pressione a <strong>Barra de Espaço</strong> para pular os obstáculos.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Game />
      </Box>
    </Container>
  )
}
