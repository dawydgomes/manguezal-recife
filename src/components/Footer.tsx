import { Box, Container, Typography } from '@mui/material'
import DigitalClock from './common/DigitalClock'

/**
 * @function Footer
 * @description Um componente de rodapé que exibe o relógio digital e informações de copyright.
 * @returns {JSX.Element} O componente de rodapé renderizado.
 */
export const Footer = () => {
  /**
   * @const timeZones
   * @description Configuração dos fusos horários a serem exibidos pelo componente DigitalClock no rodapé.
   */
  const timeZones = [
    { label: 'Horário de Brasília', timeZone: 'America/Sao_Paulo' },
    { label: 'Horário de Tóquio', timeZone: 'Asia/Tokyo' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        px: 2,
        mt: 'auto', // Garante que o rodapé seja empurrado para o final da página
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <DigitalClock timeZones={timeZones} />
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mt: 2 }}>
          © {new Date().getFullYear()} Manguezal Recife - Todos os direitos reservados.
        </Typography>
      </Container>
    </Box>
  )
}
