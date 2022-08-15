import * as React from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    if (props.value === "error") {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                minHeight: "100px",
                width: { xs: "340px", lg: "600px" },
                ml: { xs: 1, lg: 0 }
            }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "4px",
                        color: "white",
                        mb: 2
                    }} >
                        ¡error! no se pudo cargar la película
                    </Typography>
                </Box>
                <Box sx={{
                    width: { xs: "340px", lg: "600px" },
                    mr: 1, position: "relative",
                    height: "10px"
                }}>
                    <LinearProgress variant="determinate" value={100} sx={
                        [{
                            height: "10px",
                        }, {
                            ".MuiLinearProgress-bar1Determinate": {
                                backgroundColor: "red",
                            }
                        }]} />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{
                    fontFamily: "BebasNeue-Regular",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "18px",
                    letterSpacing: "4px",
                    color: "white",
                    mt: 2,
                    alignSelf: "flex-end"
                }}>
                    reintentar
                </Typography>
            </Box >
        );
    } else {
        return (
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: "flex-start",
                minHeight: "100px",
                width: { xs: "340px", lg: "600px" },
                ml: { xs: 1, lg: 0 }
            }}>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "19px",
                        letterSpacing: "4px",
                        color: "white",
                        mb: 2
                    }} >
                        {props.value === 100
                            ? "100% cargado"
                            : `cargando ${Math.round(props.value)}%`
                        }
                    </Typography>
                </Box>
                <Box sx={{
                    width: { xs: "340px", lg: "600px" },
                    mr: 1, position: "relative",
                    height: "10px"
                }}>
                    <LinearProgress variant="determinate" {...props
                    } sx={
                        [{
                            height: "10px",
                        }, {
                            ".MuiLinearProgress-bar1Determinate": {
                                backgroundColor: "#64EEBC",
                            }
                        }]} />
                </Box>
                {props.value === 100 ?
                    <Typography variant="body2" color="text.secondary" sx={{
                        fontFamily: "BebasNeue-Regular",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "22px",
                        letterSpacing: "4px",
                        color: "#64EEBC",
                        mt: 2,
                        alignSelf: "flex-end"
                    }} >
                        ¡listo!
                    </Typography> : ''}
            </Box >
        );
    };
};

export default function LoadingBar({ progress, error }) {
    if (!error) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
        );
    } else {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={"error"} />
            </Box>
        );
    }

}