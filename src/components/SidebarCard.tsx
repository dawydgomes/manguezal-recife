import { useState, useEffect } from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'

/**
 * @const {string[]} curiosities
 * @description Uma lista de fatos e curiosidades pré-definidas sobre manguezais.
 */
const curiosities: string[] = [
  'Os manguezais são considerados um dos ecossistemas mais produtivos do mundo, funcionando como berçários para 75% das espécies de peixes comerciais.',
  'As raízes dos mangues, conhecidas como rizóforos, ajudam a filtrar poluentes da água e a estabilizar o solo, prevenindo a erosão costeira.',
  'Manguezais podem armazenar até cinco vezes mais carbono por hectare do que as florestas tropicais, tornando-os essenciais na luta contra as mudanças climáticas.',
  'A lama do mangue é rica em nutrientes, mas pobre em oxigênio. As plantas desenvolveram adaptações, como raízes aéreas, para sobreviver nesse ambiente.',
  'O termo "manguezal" refere-se ao ecossistema, enquanto "mangue" é o nome dado às espécies de árvores que vivem nesse ambiente.',
];

export const SidebarCard = () => {
  /**
   * @state
   * @description Armazena a curiosidade que será exibida no card.
   */
  const [curiosity, setCuriosity] = useState<string>('');

  useEffect(() => {
    // Seleciona um índice aleatório do array de curiosidades
    const randomIndex = Math.floor(Math.random() * curiosities.length);
    // Define a curiosidade selecionada no estado do componente
    setCuriosity(curiosities[randomIndex]);
  }, []); // O array de dependências vazio garante que isso rode apenas uma vez, na montagem do componente.

  return (
    <Box sx={{ width: '100%', flexShrink: 0 }}>
      <Card sx={{ backgroundColor: '#f4f1ea', borderLeft: '4px solid #2e4635' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            🌱 Curiosidade do Dia
          </Typography>
          <Typography variant="body2">
            {curiosity || 'Carregando curiosidade...'}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
