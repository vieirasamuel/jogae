import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '../components/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import API from '../services/api';
import Header from '../components/Header';

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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h3"
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
            <Grid item xs={12} sm={6}>
              <TextField
                name="busca"
                fullWidth
                id="busca"
                label="Pesquisar eventos"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                size="large"
              >
                Pesquisar
              </Button>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="text.primary"
          gutterBottom
        >
          Meus eventos
        </Typography>
        <Grid container spacing={4}>
          <Card dados={eventos} />
        </Grid>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="text.primary"
          gutterBottom
        >
          Minhas inscrições
        </Typography>
        <Grid container spacing={4}>
          <Card dados={[]} />
        </Grid>
      </Container>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h3"
          variant="h4"
          align="left"
          color="text.primary"
          gutterBottom
        >
          Descubra eventos
        </Typography>
        <Grid container spacing={4}>
          <Card dados={eventos} />
        </Grid>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <Button size="small">Ver Mais</Button>
        </Typography>
      </Box>
    </ThemeProvider>
  );
}
