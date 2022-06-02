import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

const CollectionCard = styled(Card)`
    width: 31%;

    @media (min-width:300px) and (max-width:630px) {
        width: 48%;
    }

    @media (min-width:0px) and (max-width:300px) {
        width: 100%;
    }
`

export default function CollectionModalCard({ text, onClick, backgroundColor }) {
    return (
        <CollectionCard sx={{ height: '50px', backgroundColor: backgroundColor }}>
            <CardActionArea sx={{ height: '100%' }} onClick={() => onClick()}>
                <CardContent sx={{ padding: '0' }}>
                    <Typography variant="h7" component="div" sx={{ textAlign: 'center', color: 'white' }}>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CollectionCard>
    );
}
