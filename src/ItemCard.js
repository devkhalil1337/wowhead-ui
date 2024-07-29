import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ItemCard = ({ item }) => {
    return (
        <Card sx={{ maxWidth: 400, margin: '20px auto', backgroundColor: '#282828', color: 'white', padding: '10px', borderRadius: '10px' }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ color: item.mythic ? '#FF4500' : '#FFD700', fontWeight: 'bold', textAlign: 'center' }}>
                    {item.name.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ color: '#FFD700', textAlign: 'center' }}>
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)} - {item.slot.charAt(0).toUpperCase() + item.slot.slice(1)}
                </Typography>
                {item.power && (
                    <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px', marginBottom: '10px' }}>
                        <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                            {item.power}
                        </Typography>
                    </Box>
                )}
                {item.affixes && (
                    <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px', marginBottom: '10px' }}>
                        {item.affixes.map((affix, index) => (
                            <Typography key={index} variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                                {affix}
                            </Typography>
                        ))}
                    </Box>
                )}
                {item.flavor && (
                    <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px', fontStyle: 'italic' }}>
                        <Typography variant="body2" component="div" sx={{ marginBottom: '10px' }}>
                            {item.flavor}
                        </Typography>
                    </Box>
                )}
                {item.class && (
                    <Typography variant="body2" component="div" sx={{ color: '#FFD700' }}>
                        Class: {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
                    </Typography>
                )}
                {item.boss_drop && (
                    <Typography variant="body2" component="div" sx={{ color: '#FFD700', marginTop: '10px' }}>
                        Boss Drop: {item.boss_drop.join(', ')}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ItemCard;
