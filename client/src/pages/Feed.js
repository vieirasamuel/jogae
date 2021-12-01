import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as MaterialLink from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import API from '../services/api';
import Header from '../components/Header';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://mui.com/">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export default function Feed() {
  const [eventos, setEventos] = useState([]);

  useEffect(async () => {
    const { data } = await API.get('/events/list');
    setEventos(data);
  }, []);

  console.log(eventos);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Explorar
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <input
                type="text"
                id="myInput"
                onkeyup="myFunction()"
                placeholder="Procure novas quadras..."
              ></input>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Typography
            component="h3"
            variant="h4"
            align="left"
            color="text.primary"
            gutterBottom
          >
            Meus Eventos
          </Typography>
          <Grid container spacing={4}>
            {eventos.map((evento) => (
              <Grid item key={evento.uuid} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10.25%',
                    }}
                    image="https://sindicolegal.com/wp-content/uploads/2018/05/quadra-poliesportiva-portal.jpg"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {evento.nome}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Mais Informações</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Button size="small">Ver Mais</Button>
        </Typography>
        {/*<Copyright /> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
