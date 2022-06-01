import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AnimeCard(props) {
    const navigate = useNavigate();
    const { anime } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                onClick={() => navigate('/anime-detail/' + anime.id)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={anime.bannerImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '18px' }}>
                        {anime.title.romaji}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
