import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CollectionCard(props) {
    const navigate = useNavigate();
    const { data } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={() => navigate('/collection-detail/' + data.id)}
            >
                <Box sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 80 }}
                        image={data.animeList[0].cover}
                        alt="green iguana"
                    />
                    <CardMedia
                        component="img"
                        sx={{ width: 80 }}
                        image={data.animeList[1].cover}
                        alt="green iguana"
                    />
                    <CardMedia
                        component="img"
                        sx={{ width: 80 }}
                        image={data.animeList[2].cover}
                        alt="green iguana"
                    />
                    <CardMedia
                        component="img"
                        sx={{ width: 80 }}
                        image={data.animeList[2].cover}
                        alt="green iguana"
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '18px' }}>
                        {data.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
