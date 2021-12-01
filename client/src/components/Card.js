import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Feed({ dados }) {
  return (
    <React.Fragment>
      {dados.length > 0 ? (
        dados.map((evento) => (
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
        ))
      ) : (
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Nenhum evento cadastrado.
        </Typography>
      )}
    </React.Fragment>
  );
}
