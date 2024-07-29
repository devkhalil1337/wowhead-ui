import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const frameImage = item.mythic ? '/frames/frame_magic.webp' : '/frames/frame_legendary.webp';

    return (
        <Card className="item-card" style={{ backgroundImage: `url(${frameImage})` }}>
            <CardContent>
                <Typography variant="h6" component="div" className="item-title">
                    {item.name.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="div" className="item-subtitle">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)} - {item.slot.charAt(0).toUpperCase() + item.slot.slice(1)}
                </Typography>
                {item.power && (
                    <Box className="item-section">
                        <Typography variant="body2" component="div" className="item-text">
                            {item.power}
                        </Typography>
                    </Box>
                )}
                {item.affixes && (
                    <Box className="item-section">
                        {item.affixes.map((affix, index) => (
                            <Typography key={index} variant="body2" component="div" className="item-text">
                                {affix}
                            </Typography>
                        ))}
                    </Box>
                )}
                {item.flavor && (
                    <Box className="item-section item-flavor">
                        <Typography variant="body2" component="div" className="item-text">
                            {item.flavor}
                        </Typography>
                    </Box>
                )}
                {item.class && (
                    <Typography variant="body2" component="div" className="item-class">
                        Class: {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
                    </Typography>
                )}
                {item.boss_drop && (
                    <Typography variant="body2" component="div" className="item-boss-drop">
                        Boss Drop: {item.boss_drop.join(', ')}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ItemCard;
