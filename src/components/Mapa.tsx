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
  Legend,
} from 'recharts'

// Corrigir ícones dos marcadores (evita bug do React Leaflet com Vite)
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
})

/**
 * @const crabIcon
 * @description Define um ícone de caranguejo customizado para os marcadores do mapa,
 * utilizando a API de ícones do Leaflet. A imagem é de um serviço de ícones gratuito.
 */
const crabIcon = L.icon({
    iconUrl: 'https://img.icons8.com/plasticine/100/crab.png', // URL para a imagem do caranguejo
    iconSize:     [50, 50], // Tamanho do ícone em pixels
    iconAnchor:   [25, 50], // Ponto do ícone que corresponderá à localização do marcador (centro, na base)
    popupAnchor:  [0, -50]  // Ponto a partir do qual o popup se abrirá, relativo ao iconAnchor (acima do ícone)
});

/**
 * @typedef {object} Local
 * @description Define a estrutura de dados para cada ponto de interesse no mapa.
 * @property {string} nome - Nome da localidade do manguezal.
 * @property {[number, number]} posicao - Coordenadas de latitude e longitude.
 * @property {string} area - Área aproximada do manguezal.
 * @property {string} status - Status de conservação ou classificação da área.
 * @property {string} observacao - Informações adicionais relevantes sobre a localidade.
 */
type Local = {
  nome: string
  posicao: [number, number]
  area: string
  status: string
  observacao: string
}

/**
 * @const {Local[]} locais
 * @description Array com dados geográficos e de status de importantes áreas de manguezal em Pernambuco.
 */
const locais: Local[] = [
  {
    nome: 'Parque dos Manguezais',
    posicao: [-8.139, -34.915],
    area: 'Aprox. 323 ha',
    status: 'Unidade de Conservação',
    observacao: 'Maior manguezal urbano do Brasil, essencial para a biodiversidade local.',
  },
  {
    nome: 'APA de Santa Cruz',
    posicao: [-7.79, -34.93],
    area: 'Aprox. 5.025 ha',
    status: 'Área de Proteção Ambiental',
    observacao: 'Importante estuário no Canal de Santa Cruz, com atividades de pesca e turismo.',
  },
  {
    nome: 'APA de Guadalupe',
    posicao: [-8.65, -35.08],
    area: 'Aprox. 43.700 ha (total)',
    status: 'Área de Proteção Ambiental',
    observacao: 'Abriga um dos maiores e mais conservados trechos de manguezal do Nordeste.',
  },
  {
    nome: 'Estuário do Rio Capibaribe',
    posicao: [-8.06, -34.87],
    area: 'Variável',
    status: 'Degradado',
    observacao: 'Forte impacto da urbanização e poluição por esgoto doméstico.',
  }
]

/**
 * @const {object[]} chartData
 * @description Dados sobre a evolução da área de manguezais em Pernambuco, em milhares de hectares.
 * Fonte: Tendência baseada em dados do MapBiomas.
 */
const chartData = [
  { ano: '1990', "Área (mil ha)": 26.5 },
  { ano: '2005', "Área (mil ha)": 25.8 },
  { ano: '2020', "Área (mil ha)": 25.1 },
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
        Mapa Interativo e Dados dos Manguezais de Pernambuco
      </Typography>

      {/* Mapa com marcadores */}
      <MapContainer center={[-8.25, -35.0]} zoom={9} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {locais.map((local, idx) => (
          <Marker key={idx} position={local.posicao} icon={crabIcon}>
            <Popup>
              <strong>{local.nome}</strong><br />
              <strong>Área:</strong> {local.area}<br />
              <strong>Status:</strong> {local.status}<br />
              <strong>Obs:</strong> {local.observacao}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Gráfico de barras */}
      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Evolução da Área de Mangue em Pernambuco
      </Typography>
      <Typography variant="caption" display="block" sx={{ mb: 2 }}>
        Fonte: Tendência baseada em dados do Projeto MapBiomas.
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ano" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Área (mil ha)" fill="#4caf50" />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  )
}
