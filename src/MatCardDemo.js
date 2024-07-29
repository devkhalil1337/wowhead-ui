import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const MatCardDemo = () => {
    return (
        <Card sx={{ maxWidth: 400, margin: '20px auto', backgroundColor: '#282828', color: 'white', padding: '10px', borderRadius: '10px' }}>
            <CardContent>
                <Typography variant="h6" component="div" sx={{ color: '#FF4500', fontWeight: 'bold', textAlign: 'center' }}>
                    HELLHAMMER
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ color: '#FFD700', textAlign: 'center' }}>
                    Ancestral Unique Two-Handed Mace
                </Typography>
                <Typography variant="body2" component="div" sx={{ textAlign: 'center', marginBottom: '10px' }}>
                    925 Item Power
                </Typography>

                <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px' }}>
                    <Typography variant="body1" component="div" sx={{ marginBottom: '5px' }}>
                        3,677 Damage Per Second
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        [3,269 - 4,903] Damage per Hit
                        <br />
                        0.90 Attacks per Second (Slow)
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        +105.0% Overpower Damage
                    </Typography>
                </Box>

                <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px' }}>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        +[21.0 - 35.0]% Damage with Two-Handed Bludgeoning Weapons
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        +[3 - 4] to Upheaval
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        +[42.0 - 70.0]% Damage to Burning Enemies
                    </Typography>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px' }}>
                        +[6.0 - 11.6]% Damage Reduction from Burning Enemies
                    </Typography>
                </Box>

                <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px' }}>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '5px', color: '#FF4500' }}>
                        * Upheaval ignites the ground Burning enemies for an additional [225 - 300] damage over 4 seconds.
                    </Typography>
                </Box>

                <Box sx={{ borderTop: '1px solid #FFD700', paddingTop: '10px', fontStyle: 'italic' }}>
                    <Typography variant="body2" component="div" sx={{ marginBottom: '10px' }}>
                        The demon prince Ikonoth slew hundreds of the Heavenly Host with this infernal hammer before falling to none other than the Archangel Imperius himself.
                    </Typography>
                </Box>

                <Typography variant="body2" component="div" sx={{ marginTop: '10px', color: '#FFD700' }}>
                    Requires Level 68
                </Typography>
                <Typography variant="body2" component="div" sx={{ color: '#FFD700' }}>
                    Barbarian
                </Typography>
                <Typography variant="body2" component="div" sx={{ marginTop: '10px', color: '#FF4500', textAlign: 'center' }}>
                    Unlocks new look on salvage
                </Typography>
            </CardContent>
        </Card>
    );
};

export default MatCardDemo;
