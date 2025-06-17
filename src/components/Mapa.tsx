import { Container, Typography } from '@mui/material'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

// Corrigir ícones dos marcadores (evita bug do React Leaflet com Vite)
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

// Locais reais com dados fictícios
type Local = {
  nome: string
  posicao: [number, number]
  area: string
  qualidadeAgua: string
  observacao: string
}

const locais: Local[] = [
  {
    nome: 'Parque dos Manguezais',
    posicao: [-8.1392, -34.9153],
    area: '450 hectares',
    qualidadeAgua: 'Moderada',
    observacao: 'Reserva urbana sob pressão imobiliária.',
  },
  {
    nome: 'Estuário do Rio Capibaribe',
    posicao: [-8.0509, -34.8824],
    area: '300 hectares',
    qualidadeAgua: 'Ruim',
    observacao: 'Poluição intensa por esgoto doméstico.',
  },
  {
    nome: 'Área de Mangue - Bacia do Beberibe',
    posicao: [-8.027, -34.872],
    area: '150 hectares',
    qualidadeAgua: 'Boa',
    observacao: 'Manguezal preservado com biodiversidade visível.',
  },
]

// Dados fictícios para o gráfico
const data = [
  { ano: '2000', area: 25 },
  { ano: '2010', area: 22 },
  { ano: '2020', area: 18 },
]

export const Mapa = () => {
  return (
    <Container sx={{ 
        py: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco semi-transparente
        borderRadius: 2,
        boxShadow: 3
    }}>
      <Typography variant="h4" gutterBottom>
        Mapa Interativo dos Manguezais do Recife (Dados Fictícios)
      </Typography>

      {/* Mapa com marcadores */}
      <MapContainer center={[-8.05, -34.9]} zoom={12} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {locais.map((local, idx) => (
          <Marker key={idx} position={local.posicao}>
            <Popup>
              <strong>{local.nome}</strong><br />
              Área estimada: {local.area}<br />
              Qualidade da água: {local.qualidadeAgua}<br />
              {local.observacao}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Gráfico de barras */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Evolução da Área de Mangue (dados fictícios)
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="area" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  )
}