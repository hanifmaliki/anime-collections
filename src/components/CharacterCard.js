import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const CharCard = styled(Card)`
    display: flex;
    width: 32%;

    @media (min-width:550px) and (max-width:850px) {
        width: 48%;
    }

    @media (min-width:0px) and (max-width:550px) {
        width: 100%;
    }
`

const CharacterCard = ({ data }) => {
    return (
        <CharCard>
            <CardMedia
                component="img"
                sx={{ width: 85 }}
                image={data.image.medium}
                alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" sx={{ fontSize: '18px' }}>
                        {data.name?.last ?
                            data.name?.last + ', ' + data.name?.first
                            :
                            data.name?.first
                        }
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ fontSize: '14px' }}>
                        {data.name?.native || '-'}
                    </Typography>
                </CardContent>
            </Box>
        </CharCard>
    )
}

export default CharacterCard
