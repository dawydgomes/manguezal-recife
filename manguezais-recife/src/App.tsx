import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Mapa } from './components/Mapa'
import { Sobre } from './components/Sobre'
import { Navbar } from './components/Navbar'
import { Box } from '@mui/material'
import { SidebarCard } from './components/SideBarCard'
import { AsideInfo } from './components/AsideInfo'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 2,
          px: 2,
          pt: 2,
          pb: '70px', // Adiciona padding inferior para não sobrepor o rodapé fixo
          minHeight: 'calc(100vh - 64px)',
          // Apenas a imagem de fundo, sem filtro de desfoque
          backgroundImage: `url('/manguezal-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Conteúdo principal */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </Box>

        {/* Lateral direita com Sidebar e Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignSelf: 'flex-start',
            position: 'sticky',
            top: 72,
          }}
        >
          <SidebarCard />
          <AsideInfo />
        </Box>
      </Box>

      <Footer />
    </>
  )
}

export default App
