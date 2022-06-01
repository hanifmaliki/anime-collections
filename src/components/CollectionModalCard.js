import * as React from 'react';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function CollectionModalCard({ text, onClick, backgroundColor }) {
    return (
        <Card sx={{ width: '128px', height: '50px', backgroundColor: backgroundColor }}>
            <CardActionArea sx={{ height: '100%' }} onClick={() => onClick()}>
                <CardContent sx={{ padding: '0' }}>
                    <Typography variant="h7" component="div" sx={{ textAlign: 'center', color: 'white' }}>
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
