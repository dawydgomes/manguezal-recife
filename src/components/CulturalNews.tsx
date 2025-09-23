import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Link,
  CircularProgress,
  Alert,
} from '@mui/material';

/**
 * @interface NewsItem
 * @description Define a estrutura para um artigo de notícia da API do IBGE.
 */
interface NewsItem {
  id: number;
  titulo: string;
  link: string;
}

/**
 * @function CulturalNews
 * @description Um componente que busca e exibe as últimas notícias sobre cultura
 * da API pública do IBGE, tratando os estados de carregamento, erro e sucesso.
 * @returns {JSX.Element} O card de notícias culturais renderizado.
 */
export const CulturalNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /**
     * @function fetchCulturalNews
     * @description Busca notícias com o termo "cultura" na API do IBGE.
     */
    const fetchCulturalNews = async () => {
      try {
        // A API é configurada para buscar por "cultura" e trazer até 3 resultados
        const response = await fetch(
          'https://servicodados.ibge.gov.br/api/v3/noticias/?busca=cultura&qtd=3'
        );
        if (!response.ok) {
          throw new Error('Falha ao buscar notícias culturais do servidor.');
        }
        const data = await response.json();
        setNews(data.items);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCulturalNews();
  }, []);

  return (
    <Card sx={{ width: '100%', backgroundColor: '#f3e5f5' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          🎶 Notícias de Cultura
        </Typography>
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {error && <Alert severity="error">{error}</Alert>}
        {!loading && !error && (
          <List dense sx={{ padding: 0 }}>
            {news.length > 0 ? (
              news.map((item) => (
                <ListItem key={item.id} sx={{ padding: 0 }}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ textDecoration: 'none', color: 'text.primary', py: 0.5 }}
                  >
                    <Typography variant="body2" component="span">
                      🎭 {item.titulo}
                    </Typography>
                  </Link>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2">
                Nenhuma notícia cultural encontrada no momento.
              </Typography>
            )}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
