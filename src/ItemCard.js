import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import './ItemCard.css';

const ItemCard = ({ item }) => {
    const frameImage = item.mythic ? '/frames/frame_magic.webp' : '/frames/frame_legendary.webp';
    const outerFrame =  '/frames/tooltip_frame.webp'

    return (
        <div className="outer-card" style={{ backgroundImage: `url(${outerFrame})` }}>

        
        <Card className="item-card" style={{ backgroundImage: `url(${frameImage})` }}>
            <img src="/sword-Photoroom.png" alt="Puncture " className="hammer-image" />
            
            <CardContent style={{padding:0}}>
                <Typography variant="h6" align='left' component="div" className="item-title custom-font2">
                    {item.name.toUpperCase()}
                </Typography>
                <Typography variant="subtitle1" component="div" align='left' className="item-subtitle custom-font2 ">
                    {item.type.charAt(0).toUpperCase() + item.type.slice(1)} - {item.slot.charAt(0).toUpperCase() + item.slot.slice(1)}
                </Typography>
                <div className='outer-border'>
                <img src="/halfline.png" alt="fulline border" className="halfline" />
                    </div>
                {/* <div class="divider div-transparent div-dot"></div> */}
                {item.power && (
                    <Box className="item-section custom-font border">
                        <Typography variant="body2" component="div" align='left' className="item-text custom-font3 ">
                            {item.power}
                        </Typography>
                    </Box>
                )}
                <div className='outer-border'>
                <img src="/fullline.png" alt="halfline border" className="fullline" />
                    </div>
                {item.affixes && (
                     <ul className="item-section">
                     {item.affixes.map((affix, index) => (
                         <Typography key={index} variant="body2" component="li" align='left' className="item-text custom-font1">
                             {affix}
                         </Typography>
                     ))}
                 </ul>
                )}
                {item.flavor && (
                    <Box className="item-section2 item-flavor">
                        <img src="/file.png" alt="icon"  className='custom-icon' style={{ marginRight: '8px' }} />
                        <Typography variant="body2" component="div" className="item-para custom-font3" align='left'>
                            {item.flavor}
                        </Typography>
                    </Box>
                )}
                {item.class && (
                    <Typography variant="body2" component="div" align='right' className="item-boss-drop custom-font1">
                        Class: {item.class.charAt(0).toUpperCase() + item.class.slice(1)}
                    </Typography>
                )}
                {item.boss_drop && (
                    <Typography variant="body2" component="div" className="item-boss-drop custom-font1" align='right'>
                        Boss Drop: {item.boss_drop.join(', ')}
                    </Typography>
                )}
            </CardContent>
        </Card>
        </div>
    );
};

export default ItemCard;
