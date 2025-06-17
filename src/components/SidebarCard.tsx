import { Box, Card, CardContent, Typography } from '@mui/material'

export const SidebarCard = () => {
  return (
    <Box sx={{ width: 320, flexShrink: 0 }}>
      <Card sx={{ backgroundColor: '#f4f1ea', borderLeft: '4px solid #2e4635' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🌱 Curiosidade
          </Typography>
          <Typography variant="body2">
            Os manguezais funcionam como berçários naturais para peixes e crustáceos, além de protegerem as cidades de enchentes e erosão.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
