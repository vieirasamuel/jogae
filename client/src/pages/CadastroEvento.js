import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import InputLabel from '@mui/material/InputLabel';
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

export default function CadastroEvento() {
  const [modalidade, setModalidade] = useState('');
  const [data, setData] = useState(null);

  const handleChange = (event) => {
    setModalidade(event.target.value);
  };

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
            Cadastrar evento
          </Typography>

          <Grid
            container
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={6} xs={8} sm={6}>
              <TextField
                name="nome"
                fullWidth
                autoFocus
                id="nome"
                label="Nome do evento"
              />
            </Grid>
            <Grid item md={6} xs={4} sm={2}>
              <TextField
                name="local"
                fullWidth
                id="local"
                label="Local do evento"
              />
            </Grid>
            <Grid item md={4} xs={4} sm={2}>
              <TextField name="cidade" fullWidth id="cidade" label="Cidade" />
            </Grid>
            <Grid item md={4} xs={4} sm={2}>
              <TextField name="estado" fullWidth id="estado" label="Estado" />
            </Grid>
            <Grid item md={4} xs={4} sm={2}>
              <TextField name="pais" fullWidth id="pais" label="País" />
            </Grid>
            <Grid item md={3} xs={4} sm={2}>
              <Select
                sx={{ minWidth: 200 }}
                value={modalidade}
                onChange={handleChange}
                maxWidth
                defaultValue={0}
                labelId="modalidade"
                id="modalidade"
                label="Modalidade"
              >
                <MenuItem value="">
                  <em>Selecionar</em>
                </MenuItem>
                <MenuItem value={10}>Futebol</MenuItem>
                <MenuItem value={20}>Futsal</MenuItem>
                <MenuItem value={30}>Vôlei</MenuItem>
                <MenuItem value={40}>Basquete</MenuItem>
                <MenuItem value={50}>Handebol</MenuItem>
              </Select>
            </Grid>
            <Grid item md={3} xs={4} sm={2}>
              <TextField
                id="jogadores"
                label="Quantidade de jogadores"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={3} xs={4} sm={2}>
              <TextField
                id="espectadores"
                label="Quantidade de espectadores"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item md={3} xs={4} sm={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data do Evento"
                  value={data}
                  onChange={(newValue) => {
                    setData(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={12} xs={4} sm={2}>
              <TextField
                fullWidth
                id="descricao"
                label="Descrição do Evento"
                multiline
                rows={5}
              />
            </Grid>
            <Grid item>
              <Button
                href="/feed"
                variant="outlined"
                color="error"
                sx={{ mt: 2, mb: 2 }}
                size="large"
                style={{ height: 54 }}
              >
                Cancelar
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                size="large"
                style={{ height: 54 }}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
