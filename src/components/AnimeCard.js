import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ActionWrapper, DeleteButton, PrimaryCard } from './StyledComponents';
import DefaultBanner from '../defaultBanner.jpg'

export default function AnimeCard(props) {
    const navigate = useNavigate();
    const { anime, canDelete = false, onDelete = () => { } } = props
    return (
        <PrimaryCard>
            {canDelete && <ActionWrapper>
                <DeleteButton onClick={() => onDelete()} />
            </ActionWrapper>}
            <CardActionArea
                onClick={() => navigate('/anime-detail/' + anime.id)}
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={anime.bannerImage || DefaultBanner}
                    alt={anime.title?.romaji}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '18px' }}>
                        {anime.title.romaji}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </PrimaryCard>
    );
}
