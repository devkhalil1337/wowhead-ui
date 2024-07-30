import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const frameImage = item.mythic ? '/frames/frame_magic.webp' : '/frames/frame_legendary.webp';

    return (
        <Card className="item-card" style={{ backgroundImage: `url(${frameImage})` }}>
            <img src="/images/puncture.png" alt="Puncture Image" className="hammer-image" />
            <CardContent>
                <Typography variant="h6" align='left' component="div" className="item-title custom-font">
                    {item.name.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="div" align='left' className="item-subtitle custom-font ">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)} - {item.slot.charAt(0).toUpperCase() + item.slot.slice(1)}
                </Typography>
                {/* <div class="divider div-transparent div-dot"></div> */}
                {item.power && (
                    <Box className="item-section custom-font border">
                        <Typography variant="body2" component="div" align='left' className="item-text custom-font ">
                            {item.power}
                        </Typography>
                    </Box>
                )}
                {item.affixes && (
                     <ul className="item-section">
                     {item.affixes.map((affix, index) => (
                         <Typography key={index} variant="body2" component="li" align='left' className="item-text custom-font">
                             {affix}
                         </Typography>
                     ))}
                 </ul>
                )}
                {item.flavor && (
                    <Box className="item-section item-flavor">
                        <Typography variant="body2" component="div" className="item-para custom-font" align='left'>
                            {item.flavor}
                        </Typography>
                    </Box>
                )}
                {item.class && (
                    <Typography variant="body2" component="div" align='right' className="item-boss-drop custom-font">
                        Class: {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
                    </Typography>
                )}
                {item.boss_drop && (
                    <Typography variant="body2" component="div" className="item-boss-drop custom-font" align='right'>
                        Boss Drop: {item.boss_drop.join(', ')}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default ItemCard;
