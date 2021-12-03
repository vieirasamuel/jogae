import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function Feed() {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Jogae
        </Typography>
        <nav>
          <Link
            color="white"
            underline="hover"
            href="/feed"
            sx={{ my: 1, mx: 1.5 }}
          >
            Inicio
          </Link>
          <Link
            color="white"
            underline="hover"
            href="/novoEvento"
            sx={{ my: 1, mx: 1.5 }}
          >
            Novo Evento
          </Link>
        </nav>
        <Button
          href="/"
          color="secondary"
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
        >
          Sair
        </Button>
      </Toolbar>
    </AppBar>
  );
}
