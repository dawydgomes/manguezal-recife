import { Box } from '@mui/material'
import { EnvironmentalNews } from './EnvironmentalNews'
import { CulturalNews } from './CulturalNews'

export const AsideInfo = () => {
  return (
    <Box sx={{ width: '100%', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Componente de notícias ambientais (permanece) */}
      <EnvironmentalNews />
      
      {/* O card de cultura estático é substituído pelo novo componente dinâmico */}
      <CulturalNews />
    </Box>
  )
}
