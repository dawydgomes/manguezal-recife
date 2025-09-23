import { Container, Typography, Box } from '@mui/material'

export const Sobre = () => {
    return (
        <Container sx={{
            py: 4, // Adicionado padding vertical para consistência
            backgroundColor: 'rgba(255, 255, 255, 0.85)', // Fundo branco semi-transparente
            borderRadius: 2,
            boxShadow: 3
        }}>
            <Typography variant="h4" gutterBottom>
                Protegendo os Manguezais do Recife: Um Projeto Impulsionado pela Tecnologia
            </Typography>
            <Typography>
                Em meio à rica biodiversidade de Recife, os manguezais desempenham um papel crucial na saúde ambiental e no bem-estar da população. É com esse foco em mente que este projeto foi desenvolvido: para monitorar e informar a comunidade sobre a vital importância da preservação desses ecossistemas singulares.
                Com a utilização estratégica da tecnologia web, o projeto visa facilitar o acesso a dados relevantes e, assim, promover a conscientização ambiental de forma ampla e eficaz. Ao tornar informações complexas mais acessíveis e compreensíveis, buscamos engajar cada cidadão na proteção desses berçários da vida marinha e barreiras naturais contra desastres ambientais. Nosso objetivo é claro: garantir que as futuras gerações possam desfrutar dos benefícios que os manguezais oferecem, mantendo o equilíbrio ecológico e a resiliência de nossa cidade.
            </Typography>
            
            <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                Vídeo de Apresentação
            </Typography>
            {/* Container responsivo para o vídeo */}
            <Box sx={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                maxWidth: '800px',
                margin: '2rem auto 0',
                paddingTop: '56.25%', // Proporção 16:9 para o vídeo
            }}>
                <iframe 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 0,
                    }}
                    src="https://www.youtube.com/embed/DCIur79ax8E?si=WEscAU2HKA_sZ0Hy" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </Box>
        </Container>
    )
}
