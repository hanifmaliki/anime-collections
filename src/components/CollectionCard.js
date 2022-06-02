import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import NoImage from '../noImage.gif'
import { ActionWrapper, DeleteButton, EditButton } from './StyledComponents';

export default function CollectionCard(props) {
    const navigate = useNavigate();
    const { data, index, onDelete, onEdit } = props
    return (
        <Card sx={{ maxWidth: 345 }}>
            <ActionWrapper>
                <DeleteButton onClick={() => onDelete()} />
                <EditButton onClick={() => onEdit()} />
            </ActionWrapper>
            <CardActionArea
                sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                onClick={() => navigate('/collection-detail/' + index)}
            >
                <Box sx={{ display: 'flex' }}>
                    {data.animeList.map((el, idx) => {
                        return idx <= 5 ? <CardMedia
                            key={idx}
                            component="img"
                            sx={{ width: 80 }}
                            image={el.coverImage.large}
                            alt={el.title}
                        /> : ''
                    })}
                    {
                        data.animeList.length < 1 && <CardMedia
                            component="img"
                            sx={{ width: 90 }}
                            image={NoImage}
                            alt={'No Anime'}
                        />
                    }
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
