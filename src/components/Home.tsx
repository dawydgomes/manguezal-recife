import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <Container sx={{ 
        py: 4, 
        backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco semi-transparente
        borderRadius: 2, // Bordas arredondadas para um visual suave
        boxShadow: 3 // Sombra para destacar o card
    }}>
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          flexGrow: 1,
          textDecoration: 'none',
          color: 'inherit',
          cursor: 'pointer'
        }}
      >
        Manguezal Recife
      </Typography>

      <Typography variant="h4" gutterBottom>
        Bem-vindo ao Monitoramento de Manguezais
      </Typography>

      <Typography paragraph>
        Os manguezais do Recife têm uma longa e complexa história, moldada pela interação entre a cidade e seu ecossistema natural. Inicialmente, os manguezais eram vistos como obstáculos à expansão urbana, mas posteriormente se tornaram símbolos importantes da identidade cultural da região, especialmente com o movimento Manguebeat.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Formação e Desenvolvimento
      </Typography>

      <Typography paragraph>
        Os manguezais do Recife se formaram com a chegada das águas dos rios Capibaribe e Beberibe, acompanhando a própria formação da cidade. Eles se expandiram como "tropas de ocupação", preparando e consolidando novas áreas ao longo dos anos.
        Tradicionalmente, os manguezais foram importantes para a pesca e a subsistência de comunidades locais, sendo um ecossistema rico em crustáceos e outros animais.
      </Typography>
      <Typography paragraph>
        No entanto, com o crescimento da cidade, os manguezais sofreram com aterramentos e foram vistos como um incômodo pela classe dominante, especialmente no contexto da medicina da época, que associava os manguezais a problemas de saúde.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Manguebeat e Redescoberta
      </Typography>

      <Typography paragraph>
        Na década de 1990, o movimento Manguebeat surgiu como uma forma de contracultura, valorizando a cultura popular e a identidade local, com o manguezal como símbolo central.
        O Manguebeat, idealizado por nomes como Herom Vargas e Ariano Suassuna, buscava preservar a cultura nordestina e promover uma renovação no cenário cultural da cidade.
      </Typography>
      <Typography paragraph>
        Artistas como Chico Science e Nação Zumbi foram importantes representantes do movimento, utilizando o mangue como metáfora para a conexão entre a cultura local e a global.
        O movimento também impulsionou a criação do Porto Digital, um parque tecnológico que se inspirou na energia e na diversidade do ecossistema manguezal.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Desafios e Preservação
      </Typography>

      <Typography paragraph>
        Apesar da importância cultural e ambiental, os manguezais do Recife ainda enfrentam desafios como a ocupação desordenada do território e a poluição.
        O Parque dos Manguezais, localizado na Zona Sul do Recife, é a maior reserva de mangue em área urbana da América, mas ainda precisa de proteção e manejo adequados.
      </Typography>
      <Typography paragraph>
        A relação entre a cidade e o manguezal é complexa, envolvendo disputas territoriais, questões ambientais e culturais.
      </Typography>

      <Typography paragraph sx={{ fontWeight: 'bold' }}>
        Em resumo: Os manguezais do Recife são um ecossistema fundamental para a cidade, com uma história rica e complexa que envolve desde a sua formação até a sua redescoberta e valorização como símbolo cultural e ambiental.
      </Typography>
    </Container>
  )
}