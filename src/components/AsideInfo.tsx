import { Box, Card, CardContent, Typography, Divider } from '@mui/material'

export const AsideInfo = () => {
  return (
    <Box sx={{ width: 320, flexShrink: 0 }}>
      {/* Notícias Ambientais */}
      <Card sx={{ mb: 2, backgroundColor: '#e8f5e9' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📰 Notícias Ambientais
          </Typography>
          <Typography variant="body2" gutterBottom>
            🌍 Recife inicia plano de restauração de manguezais urbanos.
          </Typography>
          <Typography variant="body2" gutterBottom>
            🐟 Aumento na biodiversidade observada no Parque dos Manguezais.
          </Typography>
          <Typography variant="body2">
            ♻️ Projeto-piloto reaproveita resíduos para recuperação do solo de mangue.
          </Typography>
        </CardContent>
      </Card>

      {/* Referências ao Manguebeat */}
      <Card sx={{ backgroundColor: '#f3e5f5' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🎶 Manguebeat & Cultura
          </Typography>
          <Typography variant="body2" gutterBottom>
            “Um mangueboy é um caranguejo com cérebro eletrônico.” – Manifesto Manguebeat
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" gutterBottom>
            🎧 Escute: <strong>Chico Science & Nação Zumbi</strong>
          </Typography>
          <Typography variant="body2" gutterBottom>
            🎭 Influência de Ariano Suassuna no movimento
          </Typography>
          <Typography variant="body2">
            📍 O Porto Digital nasceu da inspiração mangue: misturar tradição com tecnologia.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
