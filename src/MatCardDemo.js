import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MatCardDemo = () => {
    return (
        <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Material-UI Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is an example of using Material-UI Card in a React component.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MatCardDemo;
