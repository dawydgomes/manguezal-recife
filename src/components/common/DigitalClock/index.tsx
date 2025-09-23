import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

/**
 * @interface TimeZone
 * @description Define a estrutura para um objeto de fuso horário.
 * @property {string} label - O nome de exibição para o fuso horário (ex: "Horário de Brasília").
 * @property {string} timeZone - O nome do fuso horário IANA (ex: "America/Sao_Paulo").
 */
interface TimeZone {
  label: string;
  timeZone: string;
}

/**
 * @interface DigitalClockProps
 * @description Define as props para o componente DigitalClock.
 * @property {TimeZone[]} timeZones - Um array de objetos de fuso horário para exibir.
 */
interface DigitalClockProps {
  timeZones: TimeZone[];
}

/**
 * @function DigitalClock
 * @description Um componente reutilizável que exibe la hora atual para uma lista de fusos horários.
 * @param {DigitalClockProps} props - As props do componente.
 * @returns {JSX.Element} O componente de relógio digital renderizado.
 */
const DigitalClock = ({ timeZones }: DigitalClockProps): JSX.Element => {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const timerId = setInterval(() => {
      const now = new Date();
      const newTimes: Record<string, string> = {};
      
      timeZones.forEach(tz => {
        newTimes[tz.label] = now.toLocaleTimeString('pt-BR', {
          timeZone: tz.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
      });

      setTimes(newTimes);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeZones]);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      gap: 4, 
      my: 2, // Margem vertical reduzida para se ajustar melhor ao footer
      flexWrap: 'wrap'
    }}>
      {timeZones.map(({ label }) => (
        <Box key={label} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="h2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            {label}
          </Typography>
          <Typography variant="h4" component="p" sx={{ fontFamily: 'monospace', color: 'white' }}>
            {times[label] || '00:00:00'}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DigitalClock;
