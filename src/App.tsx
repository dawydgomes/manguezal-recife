import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Mapa } from './components/Mapa'
import { Sobre } from './components/Sobre'
import { Navbar } from './components/Navbar'
import { Box } from '@mui/material'
import { SidebarCard } from './components/SideBarCard'
import { AsideInfo } from './components/AsideInfo'
import { Footer } from './components/Footer'
import { GamePage } from './components/GamePage'

function App() {
  return (
    // Container principal para garantir que o footer fique na base da página
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />

      {/* Container do conteúdo com layout responsivo */}
      <Box
        sx={{
          display: 'flex',
          flex: 1, // Faz este box expandir para preencher o espaço disponível
          flexDirection: { xs: 'column', md: 'row' }, // Empilha em telas pequenas, lado a lado em telas grandes
          alignItems: 'flex-start',
          gap: 2,
          p: 2, // Padding geral em vez de px e pt
          backgroundImage: `url('/manguezal-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Conteúdo principal */}
        <Box sx={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mapa" element={<Mapa />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/jogo" element={<GamePage />} />
          </Routes>
        </Box>

        {/* Lateral direita com Sidebar e Info (responsiva) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignSelf: 'flex-start',
            position: { md: 'sticky' }, // 'Sticky' apenas em telas médias e maiores
            top: 72,
            width: { xs: '100%', md: 320 }, // Largura total em telas pequenas, fixa em maiores
          }}
        >
          <SidebarCard />
          <AsideInfo />
        </Box>
      </Box>
      
      <Footer />
    </Box>
  )
}

export default App
